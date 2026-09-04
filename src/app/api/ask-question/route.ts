import { NextRequest, NextResponse } from "next/server";
import { sendQuestionNotification, sendQuestionConfirmation } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, question, pageUrl } = body;

    if (!firstName || !lastName || !email || !question) {
      return NextResponse.json({ error: "First name, last name, email, and question are required." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "Unknown";
    const referrer = req.headers.get("referer") || pageUrl || "Direct visit";

    // Send notification to clinic
    await sendQuestionNotification({ firstName, lastName, email, phone, question, ip, referrer });

    // Send confirmation to visitor
    try {
      await sendQuestionConfirmation({ firstName, email });
    } catch {
      console.warn("Failed to send confirmation email to visitor");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ask question form error:", error);
    return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 500 });
  }
}
