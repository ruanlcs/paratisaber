---
title: PLN - Processamento de Linguagem Natural
description: Fundamentos de PLN, principais tarefas, técnicas e introdução aos modelos de linguagem.
---

**Processamento de Linguagem Natural (PLN)**, ou *NLP* em inglês, é a área da
inteligência artificial que faz o computador **entender, interpretar e gerar
linguagem humana** — texto e fala. É o que está por trás de assistentes de voz,
tradutores automáticos, corretores e chatbots.

## Por que é difícil

A linguagem humana é ambígua e cheia de contexto. "Manga" pode ser fruta ou parte
de uma camisa. Ironia, gírias e duplo sentido tornam o problema complexo — e é aí
que o PLN atua.

## Etapas de pré-processamento

Antes de analisar texto, costuma-se prepará-lo:

- **Tokenização:** quebrar o texto em unidades (palavras ou subpalavras).
- **Remoção de stopwords:** tirar palavras muito comuns e pouco informativas
  ("de", "a", "o").
- **Stemming:** reduzir a palavra ao radical ("correndo" → "corr").
- **Lematização:** reduzir à forma base real ("correndo" → "correr"). Mais
  precisa que o stemming.

## Representando texto como números

Modelos trabalham com números, então o texto precisa ser convertido:

- **Bag of Words:** conta a frequência das palavras, ignorando a ordem.
- **TF-IDF:** pondera as palavras pela importância (frequentes num documento, mas
  raras no geral, valem mais).
- **Embeddings:** representam palavras como vetores que capturam significado —
  palavras parecidas ficam próximas no espaço vetorial.

## Principais tarefas

| Tarefa | O que faz | Exemplo |
| --- | --- | --- |
| Análise de sentimento | Detectar emoção/opinião | Avaliação é positiva ou negativa? |
| Classificação de texto | Categorizar documentos | Separar notícias por tema |
| Reconhecimento de entidades (NER) | Identificar nomes, lugares, datas | "São Paulo" = local |
| Tradução automática | Converter entre idiomas | Português → inglês |
| Sumarização | Resumir textos longos | Resumo de um artigo |

## Modelos de linguagem e LLMs

Um **modelo de linguagem** aprende a prever a próxima palavra de uma sequência.
Os **LLMs (Large Language Models)**, como os que alimentam assistentes modernos,
são modelos enormes treinados com gigantescos volumes de texto. Eles usam a
arquitetura **Transformer**, que revolucionou a área ao capturar contexto de
forma muito eficiente.

:::note
PLN é um campo que se apoia fortemente em [Machine Learning](/machine-learning/).
As técnicas modernas são, na prática, modelos de ML treinados sobre texto.
:::

:::tip[Para explorar]
Em Python, bibliotecas como **NLTK** e **spaCy** são ótimas para começar com as
tarefas clássicas de PLN.
:::
