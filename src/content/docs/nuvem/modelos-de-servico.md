---
title: Modelos de serviço (IaaS, PaaS, SaaS)
description: Diferencas entre Infraestrutura, Plataforma e Software como serviço.
---

Os **três modelos de serviço** definem o quanto o provedor gerencia e o quanto
fica sob responsabilidade do cliente.

## IaaS — Infraestrutura como Servico

O provedor entrega a infraestrutura básica: processamento, armazenamento e redes.
O cliente gerencia o sistema operacional, o middleware e as aplicações.

- **Exemplos:** Amazon EC2, Google Compute Engine, Azure Virtual Machines.
- **Analogia:** você aluga o terreno e a estrutura; constroi a casa do seu jeito.

## PaaS — Plataforma como Serviço

O provedor entrega uma plataforma pronta para desenvolvimento e implantação de
aplicações. O cliente cuida apenas das aplicações e dos dados.

- **Exemplos:** Google App Engine, Heroku, Azure App Service.
- **Analogia:** você aluga uma cozinha equipada; só precisa cozinhar.

## SaaS — Software como Serviço

O provedor entrega o software pronto, acessado pelo navegador. O cliente apenas
usa, sem se preocupar com infraestrutura ou manutenção.

- **Exemplos:** Gmail, Google Docs, Microsoft 365, Dropbox.
- **Analogia:** você vai ao restaurante; só escolhe e come.

## Quem gerencia o que

| Camada | IaaS | PaaS | SaaS |
| --- | --- | --- | --- |
| Aplicação | Cliente | Cliente | **Provedor** |
| Dados | Cliente | Cliente | **Provedor** |
| Runtime / Middleware | Cliente | **Provedor** | **Provedor** |
| Sistema operacional | Cliente | **Provedor** | **Provedor** |
| Virtualização / Servidores / Rede | **Provedor** | **Provedor** | **Provedor** |

:::tip[Para entender]
Quanto mais "para baixo" na pilha o provedor gerencia, mais controle o cliente
perde — e menos preocupação operacional ele tem. IaaS = mais controle;
SaaS = menos controle, mais comodidade.
:::
