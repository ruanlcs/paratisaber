---
title: Mineração de dados
description: Conceitos de data mining, o processo KDD, tarefas e técnicas.
---

**Mineração de dados** (*data mining*) é o processo de descobrir **padrões,
relações e conhecimento úteis** escondidos em grandes volumes de dados. A ideia é
ir além de consultar o que já se sabe: é encontrar o que **não** se sabia que
estava ali.

Um exemplo clássico: um supermercado descobre, minerando dados de compras, que
clientes que compram fraldas também tendem a comprar cerveja — e usa isso para
posicionar os produtos.

## O processo KDD

A mineração é uma etapa dentro de um processo maior chamado **KDD (Knowledge
Discovery in Databases)** — descoberta de conhecimento em bancos de dados:

1. **Seleção:** escolher os dados relevantes.
2. **Pré-processamento:** limpar (remover erros, tratar valores faltantes).
3. **Transformação:** formatar os dados para a análise.
4. **Mineração:** aplicar os algoritmos para extrair padrões.
5. **Interpretação/Avaliação:** transformar os padrões em conhecimento útil.

:::note
A mineração de dados é só **uma etapa** do KDD, embora os termos às vezes sejam
usados como sinônimos. O KDD é o processo completo, do dado bruto ao conhecimento.
:::

## Principais tarefas

| Tarefa | O que faz | Exemplo |
| --- | --- | --- |
| **Classificação** | Prever uma categoria | E-mail é spam ou não? |
| **Regressão** | Prever um valor numérico | Qual será o preço do imóvel? |
| **Agrupamento (clustering)** | Juntar itens parecidos, sem rótulo prévio | Segmentar clientes por perfil |
| **Associação** | Encontrar itens que aparecem juntos | Quem compra X também compra Y |

## Relação com Machine Learning

Mineração de dados e [Machine Learning](/machine-learning/) se sobrepõem bastante:
muitas tarefas de mineração (classificação, regressão, agrupamento) usam
algoritmos de aprendizado de máquina. A diferença de ênfase: a mineração foca em
**descobrir padrões** nos dados existentes; o ML foca em **criar modelos** que
generalizam para dados novos.

:::tip[Para fixar]
Guarde a distinção: **KDD** é o processo todo; **mineração de dados** é a etapa que
extrai os padrões; as **tarefas** (classificação, regressão, clustering,
associação) são os tipos de padrão que se busca.
:::
