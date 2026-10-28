# ParaTISaber

Plataforma aberta e gratuita de estudos de **TI e Informatica**, em portugues,
para estudantes e curiosos de todos os niveis.
Construida com [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

> Dominio pretendido: **paratisaber.com.br**

## Rodar localmente

```bash
npm install      # instala as dependencias (so na primeira vez)
npm run dev      # inicia o servidor local em http://localhost:4321
```

Outros comandos:

```bash
npm run build    # gera o site estatico na pasta dist/
npm run preview  # pre-visualiza o build de producao
```

## Estrutura

```
src/
  content/
    docs/              # todo o conteudo em Markdown (.md / .mdx)
      index.mdx        # pagina inicial
      nuvem/           # Computacao em Nuvem (secao de exemplo completa)
      programacao/     # Logica, Python, R
      analise/         # Analise de informacoes
      banco-de-dados/  # Modelagem relacional, SGBDs
      bi-dw/           # BI e Data Warehouse
      machine-learning/
      pln/
      big-data/        # Big Data, Hadoop, Spark
astro.config.mjs       # titulo, idioma e barra lateral (sidebar)
```

## Como adicionar conteudo

1. Crie um arquivo `.md` dentro de `src/content/docs/<secao>/`.
2. Comece com o "frontmatter":

   ```markdown
   ---
   title: Titulo da pagina
   description: Breve descricao (ajuda no SEO).
   ---

   Seu conteudo aqui...
   ```

3. Adicione o link correspondente na `sidebar` dentro de `astro.config.mjs`.

## Publicar (deploy gratuito)

Veja o passo a passo em [DEPLOY.md](./DEPLOY.md).
