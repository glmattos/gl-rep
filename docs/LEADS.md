# Fluxo de leads — ABC Fly Expeditions

## O que acontece quando alguém solicita orçamento

1. O usuário escolhe **Opção 1** (expedição existente via busca) ou **Opção 2** (viagem personalizada).
2. O formulário envia `POST /api/orcamento` com payload tipado.
3. O servidor valida os dados (contato + interesse + consentimento LGPD).
4. O lead é **persistido** em `content/leads/leads.jsonl` (uma linha JSON por lead).
5. O mesmo payload é registrado no log do servidor (`[QUOTE_REQUEST]`).
6. A equipe responde por e-mail/WhatsApp operacional com base nesse registro.

## Campos principais

### Expedição
- `leadType: "expedition"`
- `expeditionSlug` / `expeditionTitle`
- `departureId` / `departureLabel` ou datas flexíveis
- `name`, `email`, `phone`, `travelers`, `profile`, `message`

### Viagem personalizada
- `leadType: "custom"`
- `desiredDestination`, `period`, `duration`, `budgetRange`
- `interests[]`, `experienceType`, `adventureLevel`
- dados de contato iguais

## Notificação da equipe

**Hoje (implementado, sem inventar CRM):**
- Arquivo `content/leads/leads.jsonl` no deploy/servidor
- Log estruturado para monitoramento

**Próximas integrações recomendadas (não ligadas ainda):**
- E-mail transacional (Resend / SendGrid) para `gusti.mattos@gmail.com` e equipe comercial
- HubSpot / Pipedrive se a operação adotar CRM
- Google Sheets via webhook nativo
- WhatsApp Business API para alerta imediato

No Wix atual, formulários nativos + Automações Wix poderiam espelhar o lead; nesta plataforma Next.js o caminho oficial é a API acima.

## Acompanhamento

Cada lead recebe `id` e `createdAt`. A equipe pode filtrar o JSONL por tipo, destino ou expedição para follow-up.
