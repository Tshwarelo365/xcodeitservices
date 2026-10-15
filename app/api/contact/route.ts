import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("CONTACT_TO_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Xcode Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,

      subject: `New Xcode enquiry — ${service}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #0f172a;">

          <div style="background: #020617; padding: 30px;">
            <h1 style="margin: 0; color: white; font-size: 24px;">
              New Xcode Enquiry
            </h1>

            <p style="margin: 8px 0 0; color: #22d3ee;">
              Engineering a Smarter Future.
            </p>
          </div>

          <div style="padding: 30px; border: 1px solid #e2e8f0;">

            <h2 style="font-size: 18px; margin-top: 0;">
              Contact Details
            </h2>

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Company:</strong><br />
              ${company || "Not provided"}
            </p>

            <p>
              <strong>Service:</strong><br />
              ${service}
            </p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;" />

            <h2 style="font-size: 18px;">
              Message
            </h2>

            <p style="white-space: pre-line; line-height: 1.7;">
              ${message}
            </p>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your message. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}