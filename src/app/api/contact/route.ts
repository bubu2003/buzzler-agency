import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, businessName, phone } = data;

    if (!name || !businessName || !phone) {
      return NextResponse.json(
        { error: "Name, business name, and phone number are required." },
        { status: 400 }
      );
    }

    // Log the inquiry for server-side processing
    console.log("[Buzzler Agency Inquiry Received]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Buzzler Agency Contact API Error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
