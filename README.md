# Conceitos do Node
CRUD com rotas **GET, POST, PUT, DELETE**

## Exercício do DEV CLUB

<p align="center">
  <img src="./img/Captura de tela 2026-07-29 212843.png" alt="Exemplo CRUD 1" width="45%">
  <img src="./img/Captura de tela 2026-07-29 212911.png" alt="Exemplo CRUD 2" width="45%">
</p>

---

# AGENTS.md

## Visão geral
Este workspace é uma API Node.js com Express e Prisma usando MongoDB.  
O ponto de entrada principal é `server.js` e o schema do Prisma fica em `prisma/schema.prisma`.

## Regras importantes
- Mantenha o projeto em ESM (`"type": "module"` em `package.json`).
- Prefira `import`/`export` em vez de `require`.
- Não edite arquivos gerados em `generated/prisma` manualmente.
- Alterações de schema devem ser feitas em `prisma/schema.prisma` e regeneradas com Prisma.
- A aplicação usa `DATABASE_URL`; mantenha segredos fora do repositório.

## Comandos úteis
- Instalar dependências: `npm install`
- Iniciar servidor em modo watch: `npm run dev`
- O script `npm test` é apenas placeholder.

## Convenções do código
- API organizada em rotas CRUD em `server.js`.
- Operações com banco via `async/await` e cliente Prisma.
- Preserve comportamento das rotas existentes.
- Status HTTP coerentes: `200` sucesso, `201` criação, `404`/`500` apenas com tratamento explícito.

## Configurações do workspace
- Configurações do VS Code em `.vscode/settings.json`.
- JSON compacto e sem alterações desnecessárias.
- Usa `prisma.pinToPrisma6` para compatibilidade.

## Quando editar
- Priorize mudanças pequenas e locais.
- Se envolver Prisma, verifique schema e cliente.
- Novas rotas/modelos devem manter nomes em português e consistentes.
