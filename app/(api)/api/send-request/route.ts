 import { NextResponse } from "next/server";

 {/*Skickar meddelande till localhost:3000/send-request */}
export async function GET() {
  return NextResponse.json({ message: "Sup!" });
}

{/* */}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Mottagen data:", body);

    return NextResponse.json({ message: "POST mottagen!" });
  } catch (error) {
    return NextResponse.json({ error: "Något gick fel" }, { status: 500 });
  }
}
