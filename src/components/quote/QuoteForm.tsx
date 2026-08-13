"use client";

import { useMemo, useState, type FormEvent } from "react";
import type { Departure, Expedition } from "@/lib/types";
import { departureStatusLabel, formatDateRange } from "@/lib/format";

type Props = {
  expedition?: Expedition;
  departures?: Departure[];
  expeditions?: Expedition[];
  pageUrl?: string;
  /** Quando true, o seletor de expedição fica oculto (já escolhida via busca) */
  hideExpeditionSelect?: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  expeditionSlug: string;
  departureId: string;
  flexibleDates: boolean;
  travelers: number;
  profile: "solo" | "casal" | "familia" | "grupo";
  message: string;
  consent: boolean;
};

export function QuoteForm({
  expedition,
  departures = [],
  expeditions = [],
  pageUrl = "",
  hideExpeditionSelect = false,
}: Props) {
  const initialSlug = expedition?.slug ?? expeditions[0]?.slug ?? "";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    expeditionSlug: initialSlug,
    departureId: "",
    flexibleDates: false,
    travelers: 2,
    profile: "casal",
    message: "",
    consent: false,
  });

  const selectedExpedition = useMemo(() => {
    if (expedition) return expedition;
    return expeditions.find((item) => item.slug === form.expeditionSlug);
  }, [expedition, expeditions, form.expeditionSlug]);

  const availableDepartures = useMemo(() => {
    if (expedition) return departures;
    return departures.filter((item) => item.expeditionSlug === form.expeditionSlug);
  }, [departures, expedition, form.expeditionSlug]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedExpedition) {
      setStatus("error");
      setErrorMessage("Selecione uma expedição.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setErrorMessage("É necessário aceitar o uso dos dados para retorno.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const departure = availableDepartures.find(
      (item) => item.id === form.departureId,
    );

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "expedition",
          name: form.name,
          email: form.email,
          phone: form.phone,
          expeditionSlug: selectedExpedition.slug,
          expeditionTitle: selectedExpedition.title,
          departureId: form.flexibleDates ? undefined : departure?.id,
          departureLabel: form.flexibleDates
            ? "Datas flexíveis"
            : departure
              ? formatDateRange(departure.startDate, departure.endDate)
              : "Não informada",
          flexibleDates: form.flexibleDates,
          travelers: form.travelers,
          profile: form.profile,
          message: form.message,
          pageUrl:
            pageUrl ||
            (typeof window !== "undefined" ? window.location.href : ""),
          consent: form.consent,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Não foi possível enviar o orçamento.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o orçamento.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="quote-panel" style={{ padding: "1.5rem" }}>
        <p className="eyebrow">Solicitação recebida</p>
        <h3 className="display" style={{ fontSize: "2rem", margin: "0.4rem 0 0.8rem" }}>
          Vamos montar sua expedição.
        </h3>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Recebemos seu pedido para <strong>{selectedExpedition?.title}</strong>.
          Nossa equipe retorna em até 1 dia útil com a proposta personalizada.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-panel" style={{ padding: "1.5rem" }} onSubmit={onSubmit}>
      <p className="eyebrow">Orçamento personalizado</p>
      <h3 className="display" style={{ fontSize: "1.85rem", margin: "0.35rem 0 0.4rem" }}>
        Solicitar orçamento
      </h3>
      <p style={{ margin: "0 0 1.25rem", color: "var(--stone)", lineHeight: 1.6 }}>
        Sem carrinho. Sem compra online. A equipe prepara sua proposta com base
        na expedição, data e perfil do grupo.
      </p>

      <div style={{ display: "grid", gap: "0.9rem" }}>
        {expedition || hideExpeditionSelect ? (
          <div
            style={{
              padding: "0.85rem 1rem",
              background: "var(--navy)",
              color: "var(--snow)",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--lime)" }}>
              Expedição
            </div>
            <strong>{selectedExpedition?.title}</strong>
          </div>
        ) : (
          <div className="field">
            <label htmlFor="expeditionSlug">Expedição</label>
            <select
              id="expeditionSlug"
              required
              value={form.expeditionSlug}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  expeditionSlug: event.target.value,
                  departureId: "",
                }))
              }
            >
              {expeditions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="field">
          <label htmlFor="departureId">Data / saída</label>
          <select
            id="departureId"
            disabled={form.flexibleDates || availableDepartures.length === 0}
            value={form.departureId}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                departureId: event.target.value,
              }))
            }
          >
            <option value="">Selecione uma saída</option>
            {availableDepartures.map((item) => (
              <option
                key={item.id}
                value={item.id}
                disabled={item.status === "soldout"}
              >
                {formatDateRange(item.startDate, item.endDate)} —{" "}
                {departureStatusLabel(item.status)}
                {item.seatsLeft ? ` (${item.seatsLeft} vagas)` : ""}
              </option>
            ))}
          </select>
        </div>

        <label
          style={{
            display: "flex",
            gap: "0.55rem",
            alignItems: "center",
            fontSize: "0.92rem",
          }}
        >
          <input
            type="checkbox"
            checked={form.flexibleDates}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                flexibleDates: event.target.checked,
                departureId: event.target.checked ? "" : current.departureId,
              }))
            }
          />
          Minhas datas são flexíveis
        </label>

        <div className="form-grid-2">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </div>
          <div className="field">
            <label htmlFor="phone">WhatsApp</label>
            <input
              id="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="+55 ..."
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
          />
        </div>

        <div className="form-grid-2">
          <div className="field">
            <label htmlFor="travelers">Viajantes</label>
            <input
              id="travelers"
              type="number"
              min={1}
              max={40}
              required
              value={form.travelers}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  travelers: Number(event.target.value),
                }))
              }
            />
          </div>
          <div className="field">
            <label htmlFor="profile">Perfil</label>
            <select
              id="profile"
              value={form.profile}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  profile: event.target.value as FormState["profile"],
                }))
              }
            >
              <option value="solo">Solo</option>
              <option value="casal">Casal</option>
              <option value="familia">Família</option>
              <option value="grupo">Grupo</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Conte um pouco do seu interesse</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Nível de experiência, preferências de hospedagem, datas alternativas..."
          />
        </div>

        <label
          style={{
            display: "flex",
            gap: "0.55rem",
            alignItems: "flex-start",
            fontSize: "0.9rem",
            lineHeight: 1.5,
          }}
        >
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                consent: event.target.checked,
              }))
            }
            style={{ marginTop: "0.2rem" }}
          />
          Autorizo a ABC Fly Expeditions a usar estes dados para retornar com o
          orçamento (LGPD).
        </label>

        {status === "error" ? (
          <p role="alert" style={{ color: "#8a3030", margin: 0 }}>
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Solicitar orçamento"}
        </button>
      </div>
    </form>
  );
}
