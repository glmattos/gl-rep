# ABC Fly Expeditions — Nova Plataforma

Redesenvolvimento digital da **ABC Fly Expeditions**: expedições como experiências (não e-commerce), orçamento inteligente e gestão simples de datas.

## Stack (Fase A)

- **Next.js** (App Router) + TypeScript + Tailwind CSS v4
- Conteúdo local tipado (`content/`) com schemas Sanity prontos (`sanity/`)
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

As páginas de expedição e o formulário de orçamento refletem automaticamente.

## Rotas principais

| Rota | Função |
|------|--------|
| `/` | Home brand-first |
| `/expedicoes` | Hub de descoberta |
| `/expedicoes/[slug]` | Página rica da expedição + form |
| `/solicitar-orcamento` | Orçamento global |
| `/destinos` / `/atividades` | Taxonomia |
| `/diario` | Blog integrado (esqueleto) |
| `/loja` | Módulo futuro isolado |

## Documentos

- [Auditoria + arquitetura](./docs/AUDITORIA-E-ARQUITETURA.md)
- [Sanity schemas](./sanity/README.md)

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção
- `npm run lint` — ESLint
