---
title: BI e Data Warehouse
description: Business Intelligence, Data Warehouse, ETL, OLAP e modelagem dimensional.
---

**Business Intelligence (BI)** é o conjunto de técnicas e ferramentas que
transforma dados brutos em informação útil para apoiar **decisões de negócio**.
Em vez de olhar dados espalhados, o BI reúne, organiza e apresenta indicadores em
relatórios e painéis (dashboards).

## Data Warehouse (DW)

Um **Data Warehouse** é um grande repositório que concentra dados de várias
fontes da organização, organizados para **análise** (e não para operação do dia
a dia).

### OLTP x OLAP

Esta é uma das distinções mais importantes da área:

| | OLTP (operacional) | OLAP (analítico) |
| --- | --- | --- |
| Foco | Transações do dia a dia | Análise e decisão |
| Exemplo | Registrar uma venda | Analisar vendas do ano |
| Operações | Muitas escritas pequenas | Muitas leituras complexas |
| Onde | Banco transacional | Data Warehouse |

## Processo ETL

Os dados chegam ao DW por meio do **ETL**:

- **E — Extract (Extrair):** coletar dados das fontes (sistemas, planilhas, APIs).
- **T — Transform (Transformar):** limpar, padronizar e organizar.
- **L — Load (Carregar):** gravar os dados tratados no Data Warehouse.

:::note
Existe também o **ELT** (Extract, Load, Transform), em que os dados são carregados
primeiro e transformados depois, dentro do próprio destino. É comum em cenários
de nuvem e Big Data, com poder de processamento abundante.
:::

## OLAP e cubos de dados

O **OLAP (Online Analytical Processing)** permite analisar dados sob várias
perspectivas (dimensões), como num **cubo**. Operações típicas:

- **Drill down:** descer ao detalhe (ano → mês → dia).
- **Roll up:** subir ao resumo (dia → mês → ano).
- **Slice e dice:** recortar e cruzar dimensões (ex: vendas por região e produto).

## Modelagem dimensional

O DW é modelado com **fatos** e **dimensões**:

- **Tabela fato:** guarda as métricas/medidas (ex: valor da venda, quantidade).
- **Tabelas dimensão:** guardam o contexto (ex: tempo, produto, cliente, região).

Dois esquemas principais:

- **Estrela (star schema):** uma tabela fato central ligada diretamente às
  dimensões. Simples e rápido.
- **Floco de neve (snowflake):** as dimensões são normalizadas em várias tabelas.
  Economiza espaço, mas as consultas ficam mais complexas.

## Data Mart

Um **Data Mart** é um "pedaço" do Data Warehouse focado em uma área específica
(ex: um Data Mart só de vendas, outro só de RH). É menor e mais direcionado.

:::tip[Para fixar]
Resumo do fluxo: fontes → **ETL** → **Data Warehouse** (modelado em estrela/floco)
→ **OLAP** → dashboards de **BI** para decisão.
:::
