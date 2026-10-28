---
title: Conceitos básicos de computação em nuvem
description: O que é nuvem, origem do conceito, vantagens, desvantagens e termos essenciais.
---

## Definição

Computação em nuvem e a entrega de recursos de TI sob demanda, pela internet, com
pagamento conforme o uso. Em vez de comprar, instalar e manter servidores físicos,
a organização consome capacidade de computação, armazenamento e software de um
provedor.

## Vantagens

- **Redução de custo inicial (CapEx para OpEx):** paga-se pelo uso, sem grande
  investimento inicial em hardware.
- **Escalabilidade e elasticidade:** recursos aumentam ou diminuem conforme a
  demanda.
- **Alta disponibilidade:** provedores oferecem redundancia em muútiplas regiões.
- **Acesso de qualquer lugar:** basta conexão com a rede.

## Desvantagens e riscos

- **Dependência de conexão** com a internet.
- **Vendor lock-in:** dificuldade de migrar entre provedores.
- **Questões de segurança e privacidade** dos dados sob responsabilidade de terceiros.
- **Custos imprevisíveis** se o consumo não for monitorado.

## Termos que aparecem em prova

| Termo | Significado |
| --- | --- |
| On-demand | Recurso provisionado quando o usuário precisa |
| Pay-per-use | Cobrança conforme o consumo real |
| Multi-tenancy | Vários clientes compartilham a mesma infraestrutura de forma isolada |
| SLA | Acordo de nível de serviço (disponibilidade, desempenho) |

:::note
A nuvem **não elimina** a necessidade de segurança. Vale o modelo de
**responsabilidade compartilhada**: o provedor cuida da seguranca "da" nuvem e o
cliente cuida da seguranca "na" nuvem (seus dados e configurações).
:::
