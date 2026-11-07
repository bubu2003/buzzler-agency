import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const {
      name,
      businessName,
      phone,
      email,
      businessCategory,
      growthGoal,
      services,
      message,
    } = body;

    // Validate required fields
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanBusiness = typeof businessName === "string" ? businessName.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!cleanBusiness || cleanBusiness.length < 2) {
      return NextResponse.json(
        { error: "Please enter your business or brand name." },
        { status: 400 }
      );
    }

    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 25) {
      return NextResponse.json(
        { error: "Please provide a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    // Optional email validation
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address or leave it blank." },
        { status: 400 }
      );
    }

    // Sanitize optional fields
    const cleanCategory = typeof businessCategory === "string" ? businessCategory.slice(0, 100) : "Other";
    const cleanGoal = typeof growthGoal === "string" ? growthGoal.slice(0, 150) : "";
    const cleanServices = Array.isArray(services)
      ? services.filter((s): s is string => typeof s === "string").slice(0, 10)
      : [];
    const cleanMessage = typeof message === "string" ? message.trim().slice(0, 2000) : "";

    const inquiryRecord = {
      timestamp: new Date().toISOString(),
      name: cleanName.slice(0, 100),
      businessName: cleanBusiness.slice(0, 150),
      phone: cleanPhone,
      email: cleanEmail.slice(0, 150),
      businessCategory: cleanCategory,
      growthGoal: cleanGoal,
      services: cleanServices,
      message: cleanMessage,
    };

    // Log inquiry for server records / observability
    console.log("[Buzzler Agency Lead Received]", inquiryRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Your proposal request has been received. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Buzzler Agency Contact API Error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }
}
