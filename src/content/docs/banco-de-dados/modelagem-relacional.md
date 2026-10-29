---
title: Modelagem relacional
description: Modelo relacional, entidades, chaves, relacionamentos e normalização.
---

A **modelagem relacional** é a forma mais usada de organizar dados em bancos de
dados. Ela representa a informação em **tabelas** (relações) compostas por linhas
e colunas, um modelo proposto por Edgar F. Codd em 1970.

## Conceitos básicos

Uma **tabela** representa um conjunto de dados sobre um mesmo assunto (ex:
clientes). Ela é formada por:

- **Linha (tupla ou registro):** uma ocorrência (ex: um cliente específico).
- **Coluna (atributo ou campo):** uma característica (ex: nome, e-mail).

Exemplo da tabela `Cliente`:

| id | nome | email |
| --- | --- | --- |
| 1 | Ana | ana@email.com |
| 2 | Bruno | bruno@email.com |

## Modelo entidade-relacionamento (MER)

Antes de criar as tabelas, modelamos o problema com o **MER**, representado
graficamente pelo **Diagrama Entidade-Relacionamento (DER)**.

- **Entidade:** um objeto do mundo real sobre o qual guardamos dados
  (ex: Cliente, Produto, Pedido).
- **Atributo:** uma propriedade da entidade (ex: nome, preço).
- **Relacionamento:** a associação entre entidades (ex: um Cliente *faz* um Pedido).

## Chaves

As chaves garantem a identificação e a ligação entre tabelas.

| Chave | O que é |
| --- | --- |
| **Primária (PK)** | Identifica de forma única cada linha da tabela. Não se repete e não é nula. |
| **Estrangeira (FK)** | Campo que aponta para a chave primária de outra tabela, criando o vínculo. |
| **Candidata** | Qualquer campo que poderia ser chave primária. |
| **Composta** | Chave formada por mais de um campo. |

Exemplo: na tabela `Pedido`, o campo `cliente_id` é uma **chave estrangeira** que
aponta para o `id` (chave primária) da tabela `Cliente`.

## Tipos de relacionamento (cardinalidade)

A **cardinalidade** indica quantas ocorrências de uma entidade se relacionam com
outra.

- **Um para um (1:1):** cada registro de A se liga a no máximo um de B.
  Ex: uma pessoa tem um único CPF.
- **Um para muitos (1:N):** um registro de A se liga a vários de B.
  Ex: um cliente faz vários pedidos.
- **Muitos para muitos (N:N):** vários de A se ligam a vários de B.
  Ex: um aluno cursa várias disciplinas, e uma disciplina tem vários alunos.

:::note
Relacionamentos **N:N** não são implementados diretamente. Cria-se uma
**tabela associativa** (ou de junção) no meio, que quebra o N:N em dois 1:N.
:::

## Normalização

A **normalização** é um processo que organiza as tabelas para **reduzir
redundância** e evitar anomalias (dados duplicados ou inconsistentes). As três
primeiras formas normais são as mais cobradas:

- **1FN (Primeira Forma Normal):** cada campo guarda um único valor (atômico),
  sem listas ou grupos repetidos.
- **2FN:** está na 1FN e todos os campos dependem da **chave primária inteira**
  (relevante em chaves compostas).
- **3FN:** está na 2FN e não há dependência entre campos que não sejam chave
  (sem dependência transitiva).

:::tip[Para fixar]
Uma regra prática para a 3FN: cada atributo deve depender "da chave, de toda a
chave e de nada além da chave".
:::

## Próximos passos

Com o modelo definido, o próximo passo é implementá-lo num SGBD usando SQL. Veja
os [principais SGBDs](/banco-de-dados/sgbds/).
