import { NextRequest, NextResponse } from "next/server";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message, pageUrl } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Name, phone, and email are required." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "Unknown";
    const referrer = req.headers.get("referer") || pageUrl || "Direct visit";

    // Send notification to clinic
    await sendContactNotification({ name, phone, email, message, ip, referrer });

    // Send confirmation to visitor
    try {
      await sendContactConfirmation({ name, email });
    } catch {
      console.warn("Failed to send confirmation email to visitor");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 500 });
  }
}
