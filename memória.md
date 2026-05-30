# Memoria do Projeto

Este arquivo guarda as informacoes importantes do projeto. Tudo que for relevante para manutencao, deploy, decisoes tecnicas, configuracoes e proximos passos deve ser adicionado aqui.

## Projeto

- Nome do projeto: `intercambio-cristao-eua`
- Tipo: site Next.js
- Framework: `Next.js`
- Linguagem principal: TypeScript
- Estilizacao: Tailwind CSS
- Repositorio GitHub: `https://github.com/Heitora-avila/intercambio.git`
- Branch principal: `main`
- Deploy: Vercel conectado ao GitHub

## Deploy

O deploy deve continuar pelo fluxo GitHub -> Vercel.

Fluxo esperado:

1. Alterar arquivos localmente.
2. Rodar validacao quando necessario:

```bash
npm run build
```

3. Fazer commit.
4. Enviar para o GitHub:

```bash
git push origin main
```

5. A Vercel deve iniciar o deploy automaticamente.

## Configuracao Vercel

Foi criado o arquivo `vercel.json` para corrigir erro de deploy onde a Vercel procurava uma pasta `public` como diretorio de saida.

Configuracao atual:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

Erro que motivou a correcao:

```text
No Output Directory named "public" found after the Build completed.
```

Para Next.js, a saida correta do build e `.next`.

## Commits importantes

- `e0e0afd` - Corrige configuracao de output da Vercel.
- `74e2d76` - Adiciona `AGENTS.md` com instrucoes de deploy para agentes.

## Arquivos de referencia

- `AGENTS.md`: instrucoes para agentes sobre como trabalhar com este projeto.
- `vercel.json`: configuracao da Vercel.
- `package.json`: scripts e dependencias do projeto.
- `app/page.tsx`: pagina principal do site.

## Regras de manutencao

- Registrar neste arquivo decisoes importantes, mudancas de deploy, problemas recorrentes e solucoes aplicadas.
- Nao trocar o fluxo de deploy para upload manual se o objetivo for manter GitHub conectado a Vercel.
- Nao criar pasta `public` apenas para mascarar erro de output na Vercel.
- Antes de enviar mudancas que afetem codigo, rotas, configuracao ou dependencias, rodar `npm run build`.
- Manter alteracoes pequenas e alinhadas com o padrao atual do projeto.

## Proximos registros

Adicionar abaixo novas informacoes relevantes conforme o projeto evoluir.

### Historico

- 2026-05-30: Skill global `skill-edit` criada em `C:\Users\welli\.codex\skills\skill-edit` para suporte a criacao e edicao de imagens e videos.
- 2026-05-30: Arquivo de memoria criado para centralizar informacoes importantes do projeto.
