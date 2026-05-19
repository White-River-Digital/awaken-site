import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Body = { email?: string; source?: string };

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

async function readSubs(): Promise<{ email: string; at: string; source?: string }[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as { email: string; at: string; source?: string }[];
  } catch {
    return [];
  }
}

async function appendSubscriber(email: string, source?: string) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  const list = await readSubs();
  if (list.some((e) => e.email.toLowerCase() === email.toLowerCase())) return;
  list.push({
    email,
    at: new Date().toISOString(),
    source,
  });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const email = body.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const onVercel = Boolean(process.env.VERCEL);
  if (onVercel) {
    console.info("[subscribe]", { email, source: body.source });
  } else {
    try {
      await appendSubscriber(email, body.source);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: "Could not save" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
