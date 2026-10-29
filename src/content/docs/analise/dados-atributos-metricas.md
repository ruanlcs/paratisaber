---
title: Dados, atributos e métricas
description: Diferença entre dado, informação e conhecimento, tipos de atributos, escalas de medição e métricas.
---

Entender a diferença entre **dado, informação e conhecimento** é o ponto de
partida de qualquer análise. São conceitos que parecem iguais, mas representam
níveis diferentes de valor.

## Dado, informação e conhecimento

- **Dado:** um fato bruto, isolado, sem contexto. Ex: `38`.
- **Informação:** o dado com contexto, que passa a ter significado.
  Ex: "a temperatura do paciente é 38 °C".
- **Conhecimento:** a informação interpretada, que permite tomar decisões.
  Ex: "38 °C indica febre, então o paciente precisa de atenção".

Essa progressão costuma ser representada pela pirâmide **DIKW**
(Dado → Informação → Conhecimento → Sabedoria).

## Tipos de atributos

Um **atributo** é uma característica de um objeto ou registro. Eles se dividem em
dois grandes grupos:

### Qualitativos (categóricos)

Representam qualidades ou categorias, não números que se contam.

- **Nominais:** categorias sem ordem. Ex: cor, sexo, cidade.
- **Ordinais:** categorias com ordem. Ex: escolaridade (fundamental, médio,
  superior), satisfação (baixa, média, alta).

### Quantitativos (numéricos)

Representam quantidades, expressas por números.

- **Discretos:** valores contáveis, geralmente inteiros. Ex: número de filhos.
- **Contínuos:** podem assumir qualquer valor num intervalo. Ex: altura, peso.

## Escalas de medição

As escalas definem o que faz sentido fazer com cada atributo.

| Escala | Característica | Exemplo |
| --- | --- | --- |
| **Nominal** | Apenas rótulos, sem ordem | Cor dos olhos |
| **Ordinal** | Ordem, mas sem distância definida | Nível de satisfação |
| **Intervalar** | Ordem e distância, sem zero absoluto | Temperatura em °C |
| **Racional (razão)** | Ordem, distância e zero absoluto | Peso, altura, salário |

:::note
No zero absoluto (escala racional), o valor "0" significa ausência total. 0 kg =
sem peso. Já 0 °C **não** significa ausência de temperatura — por isso a escala
Celsius é intervalar, não racional.
:::

## Métricas e indicadores

- **Métrica:** uma medida quantitativa de algo. Ex: número de visitas ao site.
- **Indicador (KPI):** uma métrica escolhida como referência para avaliar o
  desempenho em relação a um objetivo. Ex: taxa de conversão de visitantes em
  cadastros.

Nem toda métrica é um indicador. O indicador é a métrica que **importa** para
uma decisão específica.

:::tip[Para fixar]
Pense assim: o **dado** é a matéria-prima, a **métrica** é o que você mede com
ele, e o **indicador (KPI)** é a métrica que você acompanha porque ela responde
a uma pergunta de negócio.
:::

## Próximos passos

Para garantir que esses dados sejam confiáveis e bem geridos, veja
[Governança de dados](/analise/governanca-de-dados/).
