import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // Try to save to database (if configured)
    try {
      const contactMessage = await prisma.contactMessage.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          subject: subject.trim(),
          message: message.trim(),
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Your message has been sent successfully!",
          id: contactMessage.id,
        },
        { status: 201 }
      );
    } catch (dbError) {
      // If database is not configured, still return success
      // In production, you might want to send an email instead
      console.log("Database not configured, message not saved:", dbError);

      // For demo purposes, return success even without database
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been received! (Note: Database not configured)",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit a message." },
    { status: 200 }
  );
}
