---
title: Principais SGBDs
description: O que é um SGBD, bancos relacionais e NoSQL, linguagem SQL e propriedades ACID.
---

Um **SGBD (Sistema Gerenciador de Banco de Dados)** é o software responsável por
armazenar, organizar, recuperar e proteger os dados. É ele que fica entre a
aplicação e os dados em disco, cuidando de acesso, segurança, integridade e
desempenho.

Exemplos: PostgreSQL, MySQL, Oracle, SQL Server, MongoDB.

## Bancos relacionais (SQL)

Guardam os dados em **tabelas** com linhas e colunas, seguindo a
[modelagem relacional](/banco-de-dados/modelagem-relacional/). Usam **SQL** como
linguagem e garantem forte consistência.

| SGBD | Características |
| --- | --- |
| **PostgreSQL** | Gratuito, open source, robusto e muito completo. |
| **MySQL / MariaDB** | Gratuito, muito usado em aplicações web. |
| **Oracle** | Comercial, comum em grandes corporações. |
| **SQL Server** | Da Microsoft, integrado ao ecossistema .NET. |
| **SQLite** | Leve, roda num único arquivo. Ótimo para apps locais. |

## Bancos NoSQL

"NoSQL" significa "não apenas SQL". São bancos que fogem do modelo de tabelas,
pensados para escala, flexibilidade e grandes volumes. Principais tipos:

- **Documento** (ex: MongoDB): guarda documentos tipo JSON.
- **Chave-valor** (ex: Redis): pares chave→valor, muito rápido.
- **Colunar** (ex: Cassandra): otimizado para leitura de muitas colunas.
- **Grafo** (ex: Neo4j): foca em relacionamentos entre dados.

:::note[SQL x NoSQL]
Não existe "melhor". SQL brilha quando os dados são estruturados e a consistência
é crítica (ex: sistema bancário). NoSQL brilha quando há grande volume, dados
variados ou necessidade de escalar horizontalmente (ex: rede social).
:::

## A linguagem SQL

SQL (Structured Query Language) é dividida em subconjuntos por finalidade:

| Sigla | Nome | Para quê | Comandos |
| --- | --- | --- | --- |
| **DDL** | Data Definition Language | Define a estrutura | `CREATE`, `ALTER`, `DROP` |
| **DML** | Data Manipulation Language | Manipula os dados | `INSERT`, `UPDATE`, `DELETE` |
| **DQL** | Data Query Language | Consulta os dados | `SELECT` |
| **DCL** | Data Control Language | Controla permissões | `GRANT`, `REVOKE` |
| **TCL** | Transaction Control Language | Controla transações | `COMMIT`, `ROLLBACK` |

Exemplo de consulta:

```sql
SELECT nome, email
FROM cliente
WHERE ativo = true
ORDER BY nome;
```

## Propriedades ACID

Transações em bancos relacionais seguem o conjunto **ACID**, que garante
confiabilidade:

- **A — Atomicidade:** a transação acontece por completo ou não acontece.
- **C — Consistência:** o banco vai de um estado válido para outro válido.
- **I — Isolamento:** transações simultâneas não interferem umas nas outras.
- **D — Durabilidade:** uma vez confirmada, a mudança persiste mesmo se cair a energia.

:::tip[Para fixar]
Pense numa transferência bancária: debitar de uma conta e creditar na outra
precisa ser **atômico** — ou os dois acontecem, ou nenhum. É o A do ACID em ação.
:::
