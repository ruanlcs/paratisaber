---
title: Lógica de programação
description: Fundamentos de lógica de programação - algoritmos, variáveis, operadores e estruturas de controle.
---

A **lógica de programação** é a base comum a todas as linguagens. Antes de
aprender a sintaxe de Python, Java ou qualquer outra, você precisa saber
**organizar o raciocínio** para resolver um problema passo a passo. Essa
organização é o que chamamos de algoritmo.

## O que é um algoritmo

Um **algoritmo** é uma sequência finita e ordenada de passos que resolve um
problema. Ele tem começo, meio e fim, e cada passo deve ser claro e sem
ambiguidade.

Um exemplo do dia a dia: uma receita de bolo é um algoritmo. Ela lista os
ingredientes (entradas), descreve os passos na ordem certa (processamento) e
entrega o bolo pronto (saída).

### Entrada, processamento e saída

Quase todo algoritmo segue essa estrutura:

- **Entrada:** os dados que o programa recebe (ex: dois números).
- **Processamento:** o que o programa faz com esses dados (ex: somar).
- **Saída:** o resultado entregue (ex: o total da soma).

## Variáveis e tipos de dados

Uma **variável** é um espaço na memória, com um nome, que guarda um valor que
pode mudar durante a execução do programa.

```
idade = 25
nome = "Ana"
preco = 19.90
ativo = verdadeiro
```

Os **tipos de dados** mais comuns são:

| Tipo | Guarda | Exemplo |
| --- | --- | --- |
| Inteiro | Números sem casas decimais | `10`, `-3` |
| Real / Float | Números com casas decimais | `3.14`, `19.90` |
| Texto / String | Sequência de caracteres | `"Ana"`, `"TI"` |
| Booleano | Verdadeiro ou falso | `verdadeiro`, `falso` |

## Operadores

**Aritméticos** — fazem contas:

| Operador | Operação |
| --- | --- |
| `+` | Soma |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Resto da divisão (módulo) |

**Relacionais** — comparam valores e resultam em verdadeiro ou falso:
`>`, `<`, `>=`, `<=`, `==` (igual), `!=` (diferente).

**Lógicos** — combinam condições: `E` (`and`), `OU` (`or`), `NÃO` (`not`).

## Estruturas de decisão (condicionais)

Permitem que o programa **escolha** um caminho conforme uma condição.

```
se idade >= 18 então
    escreva "Maior de idade"
senão
    escreva "Menor de idade"
fim se
```

A condição (`idade >= 18`) resulta em verdadeiro ou falso, e o programa executa
só o bloco correspondente.

## Estruturas de repetição (laços)

Permitem **repetir** um bloco de código várias vezes, sem reescrevê-lo.

**Enquanto (while)** — repete enquanto a condição for verdadeira:

```
contador = 1
enquanto contador <= 5 faça
    escreva contador
    contador = contador + 1
fim enquanto
```

**Para (for)** — repete um número conhecido de vezes:

```
para i de 1 até 5 faça
    escreva i
fim para
```

## Vetores e matrizes

- **Vetor (array):** uma lista de valores sob um mesmo nome, acessados por
  posição (índice). Ex: `notas[0]`, `notas[1]`...
- **Matriz:** um vetor de duas (ou mais) dimensões, como uma tabela com linhas
  e colunas.

## Funções

Uma **função** é um bloco de código com nome que executa uma tarefa e pode ser
reutilizado. Ela ajuda a dividir um problema grande em partes menores
(modularização).

```
função somar(a, b)
    retorne a + b
fim função

resultado = somar(7, 3)   // resultado = 10
```

:::tip[Para praticar]
Tente escrever, em pseudocódigo, um algoritmo que lê 3 notas de um aluno,
calcula a média e informa se ele foi aprovado (média >= 7) ou reprovado. Você
vai usar entrada, processamento, decisão e saída — tudo que vimos aqui.
:::

## Próximos passos

Depois de entender a lógica, o próximo passo é aplicar numa linguagem real.
Comece por [Python](/programacao/python/), que tem sintaxe simples e é ótima
para quem está começando.
