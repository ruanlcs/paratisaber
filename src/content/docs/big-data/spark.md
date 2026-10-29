---
title: Spark
description: Fundamentos do Apache Spark - processamento em memória, componentes e comparação com Hadoop.
---

O **Apache Spark** é um motor de processamento distribuído para
[Big Data](/big-data/), conhecido por ser muito mais **rápido** que o MapReduce
do Hadoop. Seu segredo é processar dados **em memória (RAM)** sempre que possível,
em vez de ler e gravar em disco a cada etapa.

## Por que é mais rápido

O MapReduce grava resultados intermediários em disco entre cada etapa. O Spark
mantém os dados em memória e só recorre ao disco quando necessário. Em tarefas
iterativas (como treinar modelos de [Machine Learning](/machine-learning/)), isso
o torna muito mais veloz.

## Estruturas de dados

- **RDD (Resilient Distributed Dataset):** a estrutura original — uma coleção
  distribuída e tolerante a falhas. É a base de tudo.
- **DataFrame:** dados organizados em colunas nomeadas (como uma tabela). Mais
  fácil de usar e otimizado.
- **Dataset:** combina as vantagens das duas, com verificação de tipos.

## Componentes

Spark é uma plataforma com vários módulos integrados:

| Componente | Para quê |
| --- | --- |
| **Spark SQL** | Consultas em dados usando SQL |
| **Spark Streaming** | Processamento de dados em tempo real |
| **MLlib** | Biblioteca de Machine Learning |
| **GraphX** | Processamento de grafos |

## Spark x Hadoop

Não são rivais diretos — muitas vezes se complementam.

| | Hadoop (MapReduce) | Spark |
| --- | --- | --- |
| Processamento | Em disco | Em memória (mais rápido) |
| Velocidade | Menor | Muito maior em tarefas iterativas |
| Tempo real | Não (só batch) | Sim (Spark Streaming) |
| Armazenamento | Tem o seu (HDFS) | Não tem; usa HDFS, S3, etc. |

:::note
Spark **não** tem sistema de armazenamento próprio. É comum rodar o Spark usando
o **HDFS** do Hadoop (ou armazenamento em nuvem) como fonte dos dados. Por isso
as duas tecnologias costumam conviver.
:::

:::tip[Para fixar]
Pense no Spark como o "motor rápido" e no HDFS como o "depósito". O Spark lê do
depósito, processa em memória e entrega o resultado muito mais rápido que o
MapReduce tradicional.
:::
