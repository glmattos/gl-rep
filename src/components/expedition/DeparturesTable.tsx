import type { Departure } from "@/lib/types";
import {
  departureStatusLabel,
  formatDateRange,
} from "@/lib/format";

export function DeparturesTable({ departures }: { departures: Departure[] }) {
  if (departures.length === 0) {
    return (
      <p style={{ color: "var(--stone)" }}>
        Saídas sob consulta. Solicite um orçamento com datas flexíveis.
      </p>
    );
  }

  return (
    <div className="table-wrap">
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "520px",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "left",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--stone)",
            }}
          >
            <th style={{ padding: "0.75rem 0.5rem" }}>Período</th>
            <th style={{ padding: "0.75rem 0.5rem" }}>Status</th>
            <th style={{ padding: "0.75rem 0.5rem" }}>Vagas</th>
            <th style={{ padding: "0.75rem 0.5rem" }}>Observações</th>
          </tr>
        </thead>
        <tbody>
          {departures.map((item) => (
            <tr key={item.id} style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "0.95rem 0.5rem", fontWeight: 600 }}>
                {formatDateRange(item.startDate, item.endDate)}
              </td>
              <td style={{ padding: "0.95rem 0.5rem" }}>
                <span className={`status-pill status-${item.status}`}>
                  {departureStatusLabel(item.status)}
                </span>
              </td>
              <td style={{ padding: "0.95rem 0.5rem" }}>
                {item.seatsLeft ?? "—"}
              </td>
              <td style={{ padding: "0.95rem 0.5rem", color: "var(--stone)" }}>
                {item.notes ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", color: "var(--stone)" }}>
        Para atualizar datas, edite apenas{" "}
        <code>content/departures.json</code> (ou a tabela Saídas no Sanity).
      </p>
    </div>
  );
}
