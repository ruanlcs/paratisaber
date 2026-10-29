---
title: Big Data
description: Conceitos de Big Data, os Vs, processamento distribuído e o ecossistema Hadoop e Spark.
---

**Big Data** se refere a conjuntos de dados tão grandes, rápidos ou variados que
as ferramentas tradicionais (como um único banco relacional) não conseguem
armazenar nem processar de forma eficiente. A solução passa por **distribuir** o
trabalho entre vários computadores.

## Os "Vs" do Big Data

O conceito costuma ser explicado pelos "Vs":

- **Volume:** quantidade massiva de dados (terabytes, petabytes).
- **Velocidade:** rapidez com que os dados são gerados e precisam ser processados
  (ex: dados em tempo real).
- **Variedade:** dados estruturados (tabelas), semiestruturados (JSON, XML) e não
  estruturados (textos, imagens, vídeos).
- **Veracidade:** confiabilidade e qualidade dos dados.
- **Valor:** o que de útil se consegue extrair deles — o Vmais importante.

:::note
Começou com 3 Vs (volume, velocidade, variedade) e foram adicionados outros.
Veracidade e valor são os mais citados além dos três originais.
:::

## Por que precisa ser diferente

Quando os dados não cabem numa única máquina, surgem duas estratégias:

- **Escalar verticalmente:** comprar uma máquina mais potente. Tem limite e fica
  caro.
- **Escalar horizontalmente:** somar várias máquinas comuns trabalhando juntas
  (um *cluster*). É a base do Big Data.

O processamento é **distribuído**: o trabalho é quebrado em pedaços, cada máquina
processa uma parte, e os resultados são combinados.

## O ecossistema

Duas tecnologias centrais, que se complementam:

- **[Hadoop](/big-data/hadoop/)** — o pioneiro do processamento distribuído, com
  armazenamento (HDFS) e processamento (MapReduce).
- **[Spark](/big-data/spark/)** — mais recente e rápido, processa em memória e se
  tornou o padrão para muitas tarefas.

:::tip[Para fixar]
Guarde a ideia central: Big Data não é só "muito dado" — é quando volume,
velocidade e variedade exigem **processamento distribuído** em vez de uma única
máquina.
:::
