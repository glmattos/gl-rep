import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import type { QuoteRequestPayload } from "@/lib/types";

function isValidPayload(body: unknown): body is QuoteRequestPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Partial<QuoteRequestPayload>;
  const baseOk = Boolean(
    data.name &&
      data.email &&
      data.phone &&
      data.travelers &&
      data.profile &&
      data.consent === true,
  );
  if (!baseOk) return false;

  if (data.leadType === "custom") {
    return Boolean(data.desiredDestination);
  }

  // expedition (default)
  return Boolean(data.expeditionSlug && data.expeditionTitle);
}

async function persistLead(payload: QuoteRequestPayload & { id: string; createdAt: string }) {
  const dir = path.join(process.cwd(), "content", "leads");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "leads.jsonl");
  await appendFile(file, `${JSON.stringify(payload)}\n`, "utf8");
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

    const createdAt = new Date().toISOString();
    const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    const payload: QuoteRequestPayload & { id: string; createdAt: string } = {
      ...body,
      leadType: body.leadType === "custom" ? "custom" : "expedition",
      travelers: Number(body.travelers),
      pageUrl: body.pageUrl || "",
      flexibleDates: Boolean(body.flexibleDates),
      id,
      createdAt,
    };

    await persistLead(payload);

    // Canal de notificação operacional atual: log estruturado + arquivo JSONL.
    // Integrações futuras (sem inventar agora): Resend, HubSpot, Sheets, WhatsApp Business API.
    console.info("[QUOTE_REQUEST]", JSON.stringify(payload));

    return NextResponse.json({
      ok: true,
      message: "Orçamento recebido.",
      lead: {
        id,
        type: payload.leadType,
        expedition: payload.expeditionTitle ?? payload.desiredDestination,
        departure: payload.departureLabel ?? payload.period ?? "A combinar",
        travelers: payload.travelers,
        createdAt,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Falha ao processar a solicitação." },
      { status: 500 },
    );
  }
}
