import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "$env/static/private";

sgMail.setApiKey(SENDGRID_API_KEY);
const PDF_GUIDE_URL = "";

export async function POST({ request }) {
  const requestBody = await request.json();

  const response = await fetch(PDF_GUIDE_URL);
  const pdfBuffer = await response.arrayBuffer();
  const base64Pdf = Buffer.from(pdfBuffer).toString("base64");

  const customerEmail = requestBody.data.object.customer_details.email;
  const customerName = requestBody.data.object.customer_details.name;

  const message = {
    to: customerEmail,
    from: "nicholas.cumbo@ibm.com",
    subject: "Your Purchase Confirmation - Complete Spain Relocation Guide",
    html: `<h1>Thank you for your purchase $(customerName}</h1>`,
    attachments: [
      {
        content: base64Pdf,
        filename: "Digital Ebook - Spain relocation.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  await sgMail.send(message);

  return json({ response: "Email Sent!" });
}
