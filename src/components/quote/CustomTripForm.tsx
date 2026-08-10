"use client";

import { useState, type FormEvent } from "react";

const INTEREST_OPTIONS = [
  "Trekking",
  "Surf",
  "Safari / Wildlife",
  "Navegação",
  "Cultura",
  "Gastronomia",
  "Backpacking",
  "Voluntariado",
  "Bike",
  "Fotografia",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  desiredDestination: string;
  travelers: number;
  period: string;
  duration: string;
  budgetRange: string;
  interests: string[];
  experienceType: string;
  adventureLevel: string;
  profile: "solo" | "casal" | "familia" | "grupo";
  message: string;
  consent: boolean;
};

export function CustomTripForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    desiredDestination: "",
    travelers: 2,
    period: "",
    duration: "",
    budgetRange: "",
    interests: [],
    experienceType: "mista",
    adventureLevel: "moderado",
    profile: "casal",
    message: "",
    consent: false,
  });

  function toggleInterest(interest: string) {
    setForm((current) => {
      const exists = current.interests.includes(interest);
      return {
        ...current,
        interests: exists
          ? current.interests.filter((item) => item !== interest)
          : [...current.interests, interest],
      };
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) {
      setStatus("error");
      setErrorMessage("É necessário aceitar o uso dos dados para retorno.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "custom",
          name: form.name,
          email: form.email,
          phone: form.phone,
          travelers: form.travelers,
          profile: form.profile,
          desiredDestination: form.desiredDestination,
          period: form.period,
          duration: form.duration,
          budgetRange: form.budgetRange,
          interests: form.interests,
          experienceType: form.experienceType,
          adventureLevel: form.adventureLevel,
          message: form.message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          consent: form.consent,
          expeditionTitle: `Viagem personalizada — ${form.desiredDestination}`,
          expeditionSlug: "custom-trip",
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Não foi possível enviar o roteiro.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o roteiro.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="quote-panel" style={{ padding: "1.5rem" }}>
        <p className="eyebrow">Roteiro solicitado</p>
        <h3 className="display" style={{ fontSize: "2rem", margin: "0.4rem 0 0.8rem" }}>
          Vamos criar sua viagem.
        </h3>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Recebemos seu briefing para <strong>{form.desiredDestination}</strong>.
          Um especialista retorna em até 1 dia útil com caminhos possíveis.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-panel" style={{ padding: "1.5rem" }} onSubmit={onSubmit}>
      <p className="eyebrow">Viagem personalizada</p>
      <h3 className="display" style={{ fontSize: "1.85rem", margin: "0.35rem 0 0.4rem" }}>
        Criar minha própria viagem
      </h3>
      <p style={{ margin: "0 0 1.25rem", color: "var(--stone)", lineHeight: 1.6 }}>
        Conte o destino, o período e o que te move. Montamos um roteiro sob
        medida — sem lista confusa de pacotes.
      </p>

      <div style={{ display: "grid", gap: "0.9rem" }}>
        <div className="field">
          <label htmlFor="desiredDestination">Destino desejado</label>
          <input
            id="desiredDestination"
            required
            placeholder="Nepal, Peru, Costa Rica, Tanzânia..."
            value={form.desiredDestination}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                desiredDestination: event.target.value,
              }))
            }
          />
        </div>

        <div className="form-grid-2">
          <div className="field">
            <label htmlFor="travelers">Número de pessoas</label>
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

        <div className="form-grid-2">
          <div className="field">
            <label htmlFor="period">Período</label>
            <input
              id="period"
              required
              placeholder="Ex.: set/2026 ou flexível"
              value={form.period}
              onChange={(event) =>
                setForm((current) => ({ ...current, period: event.target.value }))
              }
            />
          </div>
          <div className="field">
            <label htmlFor="duration">Duração</label>
            <input
              id="duration"
              required
              placeholder="Ex.: 10–14 dias"
              value={form.duration}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  duration: event.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="budgetRange">Orçamento aproximado</label>
          <select
            id="budgetRange"
            value={form.budgetRange}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                budgetRange: event.target.value,
              }))
            }
          >
            <option value="">Prefiro conversar</option>
            <option value="ate-15k">Até R$ 15.000 / pessoa</option>
            <option value="15k-30k">R$ 15.000 – 30.000 / pessoa</option>
            <option value="30k-50k">R$ 30.000 – 50.000 / pessoa</option>
            <option value="50k-plus">Acima de R$ 50.000 / pessoa</option>
          </select>
        </div>

        <div className="field">
          <span>Interesses</span>
          <div className="filter-row" style={{ marginBottom: 0 }}>
            {INTEREST_OPTIONS.map((interest) => (
              <button
                key={interest}
                type="button"
                className={`filter-chip ${form.interests.includes(interest) ? "is-active" : ""}`}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="form-grid-2">
          <div className="field">
            <label htmlFor="experienceType">Tipo de experiência</label>
            <select
              id="experienceType"
              value={form.experienceType}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  experienceType: event.target.value,
                }))
              }
            >
              <option value="aventura">Aventura intensa</option>
              <option value="mista">Mista (aventura + conforto)</option>
              <option value="imersiva">Imersão cultural / natureza</option>
              <option value="premium">Exploração com mais conforto</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="adventureLevel">Nível de aventura</label>
            <select
              id="adventureLevel"
              value={form.adventureLevel}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  adventureLevel: event.target.value,
                }))
              }
            >
              <option value="leve">Leve</option>
              <option value="moderado">Moderado</option>
              <option value="desafiante">Desafiante</option>
              <option value="extremo">Extremo / altitude</option>
            </select>
          </div>
        </div>

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

        <div className="field">
          <label htmlFor="message">Observações</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="O que não pode faltar na sua viagem?"
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
          roteiro (LGPD).
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
          {status === "loading" ? "Enviando..." : "Solicitar meu roteiro"}
        </button>
      </div>
    </form>
  );
}
