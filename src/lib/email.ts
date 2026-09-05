import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@updates.visagepolyclinicdubai.com";
const NOTIFY_EMAIL = process.env.RESEND_NOTIFY_EMAILS || "vinayakxsingh21@gmail.com";
const CC_EMAIL = process.env.RESEND_CC_EMAILS || "";
const BCC_EMAIL = process.env.RESEND_BCC_EMAILS || "";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tableRow(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#8a827b;vertical-align:top;white-space:nowrap;font-size:14px;font-family:system-ui,-apple-system,sans-serif">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#2c2926;font-size:14px;font-family:system-ui,-apple-system,sans-serif">${escapeHtml(value)}</td>
  </tr>`;
}

// ─── Contact Form ───

export async function sendContactNotification(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
  ip: string;
  referrer: string;
}) {
  const rows = [
    tableRow("Name", data.name),
    tableRow("Email", data.email),
    tableRow("Phone", data.phone),
    tableRow("Message", data.message || "No message"),
    tableRow("Page", data.referrer),
    tableRow("IP Address", data.ip),
    tableRow("Submitted", new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })),
  ];

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f7f5;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <div style="background:#2c2926;padding:32px 24px;text-align:center">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:-0.01em">New Enquiry</h1>
      <p style="margin:8px 0 0;color:#a9a29c;font-size:13px">Visage Polyclinic Website</p>
    </div>
    <div style="padding:32px 24px">
      <table style="width:100%;border-collapse:collapse">
        ${rows.join("")}
      </table>
      <div style="margin-top:24px;padding:16px;background:#f9f7f5;border-radius:8px;border-left:3px solid #b79bb9">
        <p style="margin:0;font-size:13px;color:#6b645e">Reply to <a href="mailto:${escapeHtml(data.email)}" style="color:#7a6178">${escapeHtml(data.email)}</a> to respond directly.</p>
      </div>
    </div>
    <div style="padding:16px 24px;text-align:center;border-top:1px solid #e2dfdb">
      <p style="margin:0;font-size:11px;color:#a9a29c">Visage Polyclinic LLC &middot; Business Bay, Dubai</p>
    </div>
  </div>
</body>
</html>`;

  const toList = CC_EMAIL ? [NOTIFY_EMAIL] : [NOTIFY_EMAIL];
  const ccList = CC_EMAIL ? [CC_EMAIL] : [];
  const bccList = BCC_EMAIL ? [BCC_EMAIL] : [];

  return resend.emails.send({
    from: FROM_EMAIL,
    to: toList,
    cc: ccList.length ? ccList : undefined,
    bcc: bccList.length ? bccList : undefined,
    subject: `New Enquiry from ${data.name}`,
    html,
    replyTo: data.email,
  });
}

export async function sendContactConfirmation(data: {
  name: string;
  email: string;
}) {
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f7f5;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <div style="background:#2c2926;padding:40px 24px;text-align:center">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:-0.01em">We&rsquo;ve Received Your Enquiry</h1>
      <p style="margin:12px 0 0;color:#a9a29c;font-size:14px">Thank you for reaching out to Visage Polyclinic</p>
    </div>
    <div style="padding:40px 24px">
      <p style="margin:0 0 16px;font-size:15px;color:#2c2926;line-height:1.6">Hi ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 24px;font-size:15px;color:#6b645e;line-height:1.7">
        Thank you for contacting us. We have received your message and will get back to you within one working day.
      </p>
      <p style="margin:0 0 8px;font-size:15px;color:#6b645e;line-height:1.7">
        If you need to reach us sooner, you can call <a href="tel:+97145758729" style="color:#7a6178">04 575 8729</a> or message us on <a href="https://wa.me/971581867309" style="color:#7a6178">WhatsApp</a>.
      </p>
      <p style="margin:24px 0 0;font-size:15px;color:#2c2926">
        Warm regards,<br/>
        <span style="font-weight:600">Visage Polyclinic</span>
      </p>
    </div>
    <div style="padding:16px 24px;text-align:center;border-top:1px solid #e2dfdb">
      <p style="margin:0;font-size:11px;color:#a9a29c">Office 711, Regal Tower, Business Bay, Dubai &middot; Open daily 8AM&ndash;11PM</p>
    </div>
  </div>
</body>
</html>`;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "We've Received Your Enquiry - Visage Polyclinic",
    html,
  });
}

// ─── Ask Question Form ───

export async function sendQuestionNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  question: string;
  ip: string;
  referrer: string;
}) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const rows = [
    tableRow("Name", fullName),
    tableRow("Email", data.email),
    tableRow("Phone", data.phone || "Not provided"),
    tableRow("Question", data.question),
    tableRow("Page", data.referrer),
    tableRow("IP Address", data.ip),
    tableRow("Submitted", new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })),
  ];

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f7f5;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <div style="background:#2c2926;padding:32px 24px;text-align:center">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:-0.01em">New Question Submitted</h1>
      <p style="margin:8px 0 0;color:#a9a29c;font-size:13px">Visage Polyclinic Website</p>
    </div>
    <div style="padding:32px 24px">
      <table style="width:100%;border-collapse:collapse">
        ${rows.join("")}
      </table>
      <div style="margin-top:24px;padding:16px;background:#f9f7f5;border-radius:8px;border-left:3px solid #b79bb9">
        <p style="margin:0;font-size:13px;color:#6b645e">Reply to <a href="mailto:${escapeHtml(data.email)}" style="color:#7a6178">${escapeHtml(data.email)}</a> to answer this question.</p>
      </div>
    </div>
    <div style="padding:16px 24px;text-align:center;border-top:1px solid #e2dfdb">
      <p style="margin:0;font-size:11px;color:#a9a29c">Visage Polyclinic LLC &middot; Business Bay, Dubai</p>
    </div>
  </div>
</body>
</html>`;

  const toList = CC_EMAIL ? [NOTIFY_EMAIL] : [NOTIFY_EMAIL];
  const ccList = CC_EMAIL ? [CC_EMAIL] : [];
  const bccList = BCC_EMAIL ? [BCC_EMAIL] : [];

  return resend.emails.send({
    from: FROM_EMAIL,
    to: toList,
    cc: ccList.length ? ccList : undefined,
    bcc: bccList.length ? bccList : undefined,
    subject: `New Question from ${fullName}`,
    html,
    replyTo: data.email,
  });
}

export async function sendQuestionConfirmation(data: {
  firstName: string;
  email: string;
}) {
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f7f5;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <div style="background:#2c2926;padding:40px 24px;text-align:center">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:-0.01em">Question Received</h1>
      <p style="margin:12px 0 0;color:#a9a29c;font-size:14px">We&rsquo;ll get back to you within one working day</p>
    </div>
    <div style="padding:40px 24px">
      <p style="margin:0 0 16px;font-size:15px;color:#2c2926;line-height:1.6">Hi ${escapeHtml(data.firstName)},</p>
      <p style="margin:0 0 24px;font-size:15px;color:#6b645e;line-height:1.7">
        Thank you for reaching out. Dr. Musa&rsquo;s team has received your question and will review it personally. You can expect a response within one working day.
      </p>
      <p style="margin:0 0 8px;font-size:15px;color:#6b645e;line-height:1.7">
        If your question is urgent, feel free to call us at <a href="tel:+97145758729" style="color:#7a6178">04 575 8729</a> or message us on <a href="https://wa.me/971581867309" style="color:#7a6178">WhatsApp</a>.
      </p>
      <p style="margin:24px 0 0;font-size:15px;color:#2c2926">
        Warm regards,<br/>
        <span style="font-weight:600">Visage Polyclinic</span>
      </p>
    </div>
    <div style="padding:16px 24px;text-align:center;border-top:1px solid #e2dfdb">
      <p style="margin:0;font-size:11px;color:#a9a29c">Office 711, Regal Tower, Business Bay, Dubai &middot; Open daily 8AM&ndash;11PM</p>
    </div>
  </div>
</body>
</html>`;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "We've Received Your Question - Visage Polyclinic",
    html,
  });
}
