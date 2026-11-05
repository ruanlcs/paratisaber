---
title: Introdução a banco de dados
description: O que é um banco de dados, como funciona, exemplos, aplicações reais, revisão e exercícios para testar o aprendizado.
---

Um **banco de dados** é uma coleção organizada de informações, armazenada de
forma eletrônica, que pode ser facilmente acessada, gerenciada e atualizada.
Praticamente todo sistema que você usa — um aplicativo de banco, uma rede social,
uma loja online — guarda seus dados em um banco de dados.

Esta página é a porta de entrada da seção. Se você está começando do zero, comece
por aqui e depois siga para [Modelagem relacional](/banco-de-dados/modelagem-relacional/)
e [Principais SGBDs](/banco-de-dados/sgbds/).

## Conceitos fundamentais

Antes de avançar, é importante separar três termos que costumam ser confundidos:

- **Dado:** um fato bruto, isolado (ex: o número `42`, o nome `"Ana"`).
- **Banco de dados:** o conjunto de dados organizado e relacionado (ex: a lista de
  todos os clientes de uma loja, com seus nomes, e-mails e pedidos).
- **SGBD (Sistema Gerenciador de Banco de Dados):** o *software* que gerencia o
  banco de dados. É ele que cria, lê, atualiza e protege os dados. Exemplos:
  PostgreSQL, MySQL, Oracle.

:::note
É comum dizer "banco de dados" para se referir às duas coisas (os dados e o
software). Tecnicamente, o **banco** são os dados; o **SGBD** é o programa que
cuida deles. A página [Principais SGBDs](/banco-de-dados/sgbds/) aprofunda essa
distinção.
:::

### Por que não usar só planilhas ou arquivos?

Para poucos dados, uma planilha resolve. Mas conforme o volume cresce e vários
usuários acessam ao mesmo tempo, surgem problemas que o banco de dados resolve:

- **Redundância e inconsistência:** o mesmo dado repetido em vários lugares, que
  pode ficar diferente entre eles.
- **Acesso simultâneo:** várias pessoas lendo e escrevendo ao mesmo tempo sem
  corromper a informação.
- **Segurança e permissões:** controlar quem pode ver ou alterar o quê.
- **Integridade:** garantir que os dados sigam regras (ex: todo pedido pertence a
  um cliente que existe).

## Como funciona

De forma simplificada, o fluxo é assim:

1. Uma **aplicação** (site, app) precisa de um dado ou quer gravar algo.
2. Ela envia um pedido ao **SGBD**, geralmente escrito em **SQL** (nos bancos
   relacionais).
3. O **SGBD** interpreta o pedido, acessa os dados armazenados em disco, aplica as
   regras de segurança e integridade, e devolve o resultado.
4. A aplicação recebe a resposta e mostra para o usuário.

O usuário final nunca fala direto com os dados: tudo passa pelo SGBD, que atua
como um "porteiro" organizado e seguro.

### Modelos de banco de dados

Existem diferentes formas de organizar os dados. As duas grandes famílias:

- **Relacional (SQL):** os dados ficam em **tabelas** com linhas e colunas, e as
  tabelas se relacionam entre si. É o modelo mais tradicional e usado.
- **NoSQL ("não apenas SQL"):** modelos mais flexíveis (documentos, chave-valor,
  grafos), pensados para grande escala e dados variados.

## Exemplos

Imagine uma pequena loja. Precisamos guardar **clientes** e **pedidos**. No modelo
relacional, teríamos duas tabelas:

Tabela `Cliente`:

| id | nome | email |
| --- | --- | --- |
| 1 | Ana | ana@email.com |
| 2 | Bruno | bruno@email.com |

Tabela `Pedido`:

| id | cliente_id | valor |
| --- | --- | --- |
| 101 | 1 | 59.90 |
| 102 | 1 | 120.00 |
| 103 | 2 | 35.50 |

Repare: o campo `cliente_id` na tabela `Pedido` **aponta** para o `id` da tabela
`Cliente`. É assim que o banco sabe que os pedidos 101 e 102 são da Ana. Essa
ligação é a essência do modelo relacional.

### Exemplo com código (SQL)

Para "perguntar" ao banco quais pedidos a Ana fez, usamos **SQL**:

```sql
SELECT Pedido.id, Pedido.valor
FROM Pedido
JOIN Cliente ON Pedido.cliente_id = Cliente.id
WHERE Cliente.nome = 'Ana';
```

Resultado:

| id | valor |
| --- | --- |
| 101 | 59.90 |
| 102 | 120.00 |

Não se preocupe em dominar o SQL agora — a ideia é só perceber que fazemos
**perguntas** ao banco e ele devolve exatamente os dados pedidos.

## Aplicações

Bancos de dados estão em quase tudo:

- **Aplicativo de banco:** seu saldo, extrato e transferências são registros em um
  banco de dados, protegidos por regras rígidas de integridade.
- **Rede social:** posts, curtidas, seguidores e mensagens ficam armazenados e
  relacionados entre si.
- **Loja online:** catálogo de produtos, carrinho, pedidos e estoque.
- **Sistema de saúde:** prontuários, exames e agendamentos de pacientes.

Entender banco de dados é base para várias áreas de TI:

- **Desenvolvimento de sistemas** — quase todo software guarda dados.
- **Análise de dados e BI** — os dados analisados vêm de bancos de dados (veja
  [BI e Data Warehouse](/bi-dw/)).
- **Administração de banco de dados (DBA)** — profissionais que cuidam de
  desempenho, backup e segurança dos bancos.
- **Ciência de dados e Machine Learning** — modelos são treinados com dados que
  normalmente partem de bancos de dados.

## Revisão

- Um **banco de dados** é uma coleção organizada de dados; o **SGBD** é o software
  que o gerencia.
- Bancos resolvem problemas de redundância, acesso simultâneo, segurança e
  integridade que planilhas não resolvem bem.
- No modelo **relacional**, os dados ficam em **tabelas** que se relacionam por
  chaves; usamos **SQL** para consultá-los.
- Além do relacional, existem bancos **NoSQL**, mais flexíveis.
- Bancos de dados são a base de sistemas, análise de dados, BI e muito mais.

## Exercícios

**1.** Qual a diferença entre "banco de dados" e "SGBD"?

<details>
<summary>Ver resposta</summary>

O **banco de dados** é a coleção organizada de dados em si. O **SGBD** é o
software que gerencia esse banco (cria, consulta, atualiza e protege os dados).
Ex: os dados dos clientes são o banco; o PostgreSQL é o SGBD.

</details>

**2.** Cite dois problemas que um banco de dados resolve e que seriam difíceis de
tratar usando apenas planilhas.

<details>
<summary>Ver resposta</summary>

Entre outros: **redundância/inconsistência** de dados, **acesso simultâneo** de
vários usuários, **segurança/permissões** e **integridade** (garantir regras,
como todo pedido pertencer a um cliente existente).

</details>

**3.** No exemplo da loja, qual é a função do campo `cliente_id` da tabela
`Pedido`?

<details>
<summary>Ver resposta</summary>

Ele **aponta para o `id` da tabela `Cliente`**, ligando cada pedido ao cliente
que o fez. É esse campo que estabelece o relacionamento entre as duas tabelas no
modelo relacional. (O nome técnico desse tipo de campo você vê em
[Modelagem relacional](/banco-de-dados/modelagem-relacional/).)

</details>

**4.** Cite o nome das duas grandes famílias de modelos de banco de dados.

<details>
<summary>Ver resposta</summary>

**Relacional (SQL)** e **NoSQL**.

</details>

## Referências

- Elmasri, R.; Navathe, S. B. *Sistemas de Banco de Dados*. Pearson.
- Date, C. J. *Introdução a Sistemas de Bancos de Dados*. Campus.
- [Documentação do PostgreSQL](https://www.postgresql.org/docs/)
- [MDN Web Docs — Conceitos de banco de dados](https://developer.mozilla.org/)
