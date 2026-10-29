---
title: Machine Learning
description: Fundamentos de aprendizado de máquina - tipos de aprendizado, algoritmos, treino e avaliação.
---

**Machine Learning (aprendizado de máquina)** é a área da inteligência artificial
em que o computador **aprende padrões a partir de dados**, em vez de seguir
regras programadas manualmente. Mostramos muitos exemplos ao algoritmo, e ele
"aprende" a fazer previsões sobre dados novos.

Exemplo: em vez de escrever regras para identificar spam, treinamos um modelo com
milhares de e-mails já rotulados como "spam" ou "não spam", e ele aprende a
classificar os próximos.

## Tipos de aprendizado

### Supervisionado

O modelo aprende com dados **rotulados** (sabemos a resposta certa).

- **Classificação:** prever uma categoria (spam ou não; doente ou saudável).
- **Regressão:** prever um número (preço, temperatura).

### Não supervisionado

O modelo recebe dados **sem rótulos** e busca estrutura por conta própria.

- **Agrupamento (clustering):** juntar itens parecidos (segmentar clientes).
- **Redução de dimensionalidade:** resumir muitas variáveis em poucas.

### Por reforço

O modelo (agente) aprende por **tentativa e erro**, recebendo recompensas ou
punições. Usado em jogos, robótica e sistemas de recomendação.

## Algoritmos comuns

| Algoritmo | Tipo | Uso típico |
| --- | --- | --- |
| Regressão linear | Supervisionado | Prever valores numéricos |
| Regressão logística | Supervisionado | Classificação binária |
| Árvore de decisão | Supervisionado | Classificação e regressão |
| KNN (vizinhos mais próximos) | Supervisionado | Classificação |
| K-means | Não supervisionado | Agrupamento |

## Treino, validação e teste

Para o modelo generalizar bem, dividimos os dados:

- **Treino:** o modelo aprende com esse conjunto.
- **Validação:** ajusta-se os parâmetros sem "contaminar" o teste.
- **Teste:** avalia-se o desempenho final em dados nunca vistos.

## Overfitting e underfitting

Dois problemas centrais:

- **Overfitting (sobreajuste):** o modelo "decora" os dados de treino e vai mal em
  dados novos. Ótimo no treino, ruim no teste.
- **Underfitting (subajuste):** o modelo é simples demais e nem no treino aprende
  bem.

O ideal é o equilíbrio: um modelo que generaliza.

## Métricas de avaliação (classificação)

- **Acurácia:** proporção de acertos no total.
- **Precisão:** dos que o modelo disse serem positivos, quantos eram mesmo.
- **Recall (revocação):** dos positivos reais, quantos o modelo encontrou.
- **F1-score:** média equilibrada entre precisão e recall.

:::note
Acurácia pode enganar em dados desbalanceados. Se 99% dos e-mails não são spam,
um modelo que chuta "nunca é spam" acerta 99% — mas é inútil. Por isso olhamos
também precisão e recall.
:::

## Relação com outras áreas

ML é a base de muitas aplicações modernas, incluindo
[Processamento de Linguagem Natural](/pln/) e a análise de grandes volumes em
[Big Data](/big-data/). Em Python, bibliotecas como **scikit-learn**, **TensorFlow**
e **PyTorch** são as mais usadas.
