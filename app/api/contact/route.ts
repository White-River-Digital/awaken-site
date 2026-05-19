import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Body = { name?: string; email?: string; message?: string };

const DATA_FILE = path.join(process.cwd(), "data", "messages.json");

async function appendMessage(entry: {
  name: string;
  email: string;
  message: string;
  at: string;
}) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  let list: typeof entry[] = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    list = JSON.parse(raw) as typeof entry[];
  } catch {
    list = [];
  }
  list.push(entry);
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const onVercel = Boolean(process.env.VERCEL);
  const entry = {
    name,
    email,
    message,
    at: new Date().toISOString(),
  };
  if (onVercel) {
    console.info("[contact]", entry);
  } else {
    try {
      await appendMessage(entry);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: "Could not save" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
