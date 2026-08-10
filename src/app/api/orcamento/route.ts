import { NextResponse } from "next/server";
import type { QuoteRequestPayload } from "@/lib/types";

function isValidPayload(body: unknown): body is QuoteRequestPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Partial<QuoteRequestPayload>;
  return Boolean(
    data.name &&
      data.email &&
      data.phone &&
      data.expeditionSlug &&
      data.expeditionTitle &&
      data.travelers &&
      data.profile &&
      data.consent === true,
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: "Dados incompletos para solicitar orçamento." },
        { status: 400 },
      );
    }

    const payload: QuoteRequestPayload = {
      ...body,
      travelers: Number(body.travelers),
      pageUrl: body.pageUrl || "",
      flexibleDates: Boolean(body.flexibleDates),
    };

    // Integração futura: Resend / HubSpot / WhatsApp Business / Sheets.
    // Por enquanto registramos o lead estruturado no servidor.
    console.info("[QUOTE_REQUEST]", JSON.stringify(payload));

    return NextResponse.json({
      ok: true,
      message: "Orçamento recebido.",
      lead: {
        expedition: payload.expeditionTitle,
        departure: payload.departureLabel ?? "Datas flexíveis",
        travelers: payload.travelers,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Falha ao processar a solicitação." },
      { status: 500 },
    );
  }
}
