---
title: Governança de dados
description: Fundamentos de governança de dados - qualidade, papéis, privacidade, LGPD e frameworks.
---

**Governança de dados** é o conjunto de políticas, processos e papéis que
garante que os dados de uma organização sejam **confiáveis, seguros e usados de
forma responsável**. Ela responde a perguntas como: quem é dono de cada dado?
Quem pode acessá-lo? Como garantir que esteja correto e protegido?

## Qualidade de dados

Dado ruim leva a decisão ruim. A qualidade é medida por dimensões como:

- **Precisão:** o dado reflete a realidade.
- **Completude:** não há campos faltando.
- **Consistência:** o mesmo dado não se contradiz entre sistemas.
- **Atualidade:** o dado está atualizado.
- **Unicidade:** não há duplicatas.

## Papéis típicos

A governança define responsáveis claros pelos dados:

- **Data Owner (proprietário):** responde pelo dado e pelas regras de uso de uma
  área (geralmente um gestor de negócio).
- **Data Steward (curador):** cuida da qualidade e do uso correto no dia a dia.
- **Data Custodian (custodiante):** cuida da parte técnica (armazenamento,
  backup, segurança) — normalmente da TI.

## Privacidade e LGPD

No Brasil, a **LGPD (Lei Geral de Proteção de Dados — Lei 13.709/2018)** regula o
tratamento de **dados pessoais**. Pontos essenciais:

- **Dado pessoal:** qualquer informação que identifique uma pessoa.
- **Dado sensível:** categoria especial (saúde, religião, biometria, etc.), com
  proteção reforçada.
- **Titular:** a pessoa a quem os dados se referem; tem direitos como acesso,
  correção e exclusão.
- **Bases legais:** o tratamento só é permitido com justificativa (consentimento,
  obrigação legal, etc.).
- **ANPD:** a Autoridade Nacional de Proteção de Dados fiscaliza o cumprimento.

:::note
A LGPD brasileira é inspirada na **GDPR** europeia. Ambas colocam o titular no
centro e exigem transparência sobre como os dados são usados.
:::

## Frameworks

O mais conhecido é o **DAMA-DMBOK** (Data Management Body of Knowledge), que
organiza a gestão de dados em áreas como qualidade, segurança, metadados e
arquitetura. Serve de referência para estruturar a governança.

:::tip[Para fixar]
Governança não é só segurança: é garantir que o dado certo, com qualidade,
chegue à pessoa certa, de forma segura e dentro da lei.
:::
