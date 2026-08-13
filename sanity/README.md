# Sanity CMS — ABC Fly Expeditions

Schemas prontos para o Studio:

- `expedition` — páginas ricas de roteiro
- `departure` — **tabela de datas/saídas** (edição operacional sem código)

## Uso atual

A Fase A roda com conteúdo local:

- Expedições: `content/expeditions.ts`
- Saídas: `content/departures.json` ← edite apenas este arquivo para atualizar datas

## Próximo passo (conectar Sanity)

1. `npm create sanity@latest`
2. Apontar `schemaTypes` deste diretório
3. Trocar `src/lib/content.ts` para queries GROQ
4. Manter o mesmo contrato de tipos em `src/lib/types.ts`
