import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Mottagen data:", body);
  return NextResponse.json({ message: "Request mottagen!" });
}

await fetch("/api/send-request", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Anna" }),
});
