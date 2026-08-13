# ABC Fly Expeditions — Nova Plataforma

Redesenvolvimento digital da **ABC Fly Expeditions**: expedições como experiências (não e-commerce), orçamento inteligente e gestão simples de datas.

## Stack

- **Next.js** (App Router) + TypeScript + Tailwind CSS v4
- Conteúdo local tipado (`content/`) com schemas Sanity (`sanity/`)
- Formulário de orçamento com payload completo (`/api/orcamento`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Atualizar datas (sem programar)

Edite apenas:

```text
content/departures.json
```

## Rotas principais

| Rota | Função |
|------|--------|
| `/` | Home narrativa brand-first |
| `/expedicoes` | Hub de descoberta |
| `/expedicoes/[slug]` | Página rica da expedição + form |
| `/solicitar-orcamento` | Orçamento global |
| `/destinos` / `/destinos/[slug]` | Hubs de destino |
| `/atividades` / `/atividades/[slug]` | Experiências |
| `/diario` / `/diario/[slug]` | Conteúdo + expedições relacionadas |
| `/como-viajamos` / `/depoimentos` / `/sobre` | Marca e confiança |
| `/loja` | Módulo futuro isolado |

## Documentos

- [Auditoria + arquitetura](./docs/AUDITORIA-E-ARQUITETURA.md)
- [Sanity schemas](./sanity/README.md)
- Evidências finais em `docs/final/`

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção
- `npm run lint` — ESLint
