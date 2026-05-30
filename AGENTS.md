# AGENTS.md

## Projeto

Este repositorio e um site Next.js publicado na Vercel via integracao com GitHub.

- Repositorio remoto: `https://github.com/Heitora-avila/intercambio.git`
- Branch de producao: `main`
- Framework: `Next.js`
- Comando de build: `npm run build`
- Diretorio de saida esperado na Vercel: `.next`

## Fluxo de deploy

O deploy deve continuar pelo fluxo GitHub -> Vercel.

1. Fazer alteracoes localmente.
2. Validar com:

```bash
npm run build
```

3. Commitar as alteracoes.
4. Enviar para a branch `main`:

```bash
git push origin main
```

5. A Vercel deve iniciar um novo deploy automaticamente a partir do commit enviado.

## Configuracao da Vercel

O arquivo `vercel.json` define a configuracao esperada para evitar erro de diretorio de saida:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

Se a Vercel exibir erro parecido com:

```text
No Output Directory named "public" found after the Build completed.
```

isso indica que o projeto estava configurado para procurar `public` como saida do build. Para Next.js, a saida correta do build e `.next`.

No painel da Vercel, conferir:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next` ou vazio quando usando preset Next.js

## Observacoes para agentes

- Nao trocar o fluxo de deploy para upload manual se o usuario pedir para continuar com GitHub conectado a Vercel.
- Nao criar pasta `public` apenas para resolver o erro de deploy; isso mascararia o problema e poderia publicar a saida errada.
- Antes de enviar alteracoes, rodar `npm run build` quando a mudanca puder afetar build, rotas, configuracao ou dependencias.
- Manter alteracoes pequenas e compativeis com o app Next.js existente.
