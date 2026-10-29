---
title: Linguagem R
description: Introdução à linguagem R para estatística e análise de dados.
---

**R** é uma linguagem criada especialmente para **estatística e análise de
dados**. É muito usada na academia, em pesquisa e em áreas que dependem de
análise estatística pesada, como bioestatística e ciências sociais.

:::note[R ou Python?]
Ambas são ótimas para dados. R nasceu com foco estatístico e brilha em análise e
visualização. Python é mais generalista (serve para web, automação, IA). Muitos
analistas usam as duas, escolhendo conforme a tarefa.
:::

## Primeiros passos

Em R, atribuímos valores com `<-` (embora `=` também funcione):

```r
idade <- 25
nome <- "Ana"
print(nome)
```

## Vetores

O vetor é a estrutura fundamental de R — uma sequência de valores do mesmo tipo:

```r
notas <- c(7, 8, 9, 6)
mean(notas)    # média: 7.5
max(notas)     # maior: 9
length(notas)  # quantidade: 4
```

A função `c()` ("combine") cria o vetor.

## Data frames

O **data frame** é uma tabela, com linhas e colunas — a estrutura mais usada para
dados reais:

```r
alunos <- data.frame(
  nome = c("Ana", "Bruno", "Carla"),
  nota = c(8.5, 6.0, 9.2)
)

head(alunos)       # mostra as primeiras linhas
mean(alunos$nota)  # média da coluna "nota"
```

O `$` acessa uma coluna pelo nome.

## Estatística descritiva

R traz prontas as funções estatísticas mais comuns:

```r
summary(notas)   # mínimo, quartis, média, máximo
sd(notas)        # desvio padrão
median(notas)    # mediana
```

## Pacotes essenciais

A força de R está nos seus pacotes:

- **tidyverse** — conjunto de pacotes para manipular e organizar dados.
- **dplyr** — filtrar, agrupar e resumir dados de forma legível.
- **ggplot2** — gráficos elegantes e poderosos.

```r
install.packages("ggplot2")  # instala uma vez
library(ggplot2)             # carrega para usar
```

:::tip[Para começar]
Instale o **R** junto com o **RStudio** (ambiente gratuito e amigável). Ele
facilita muito escrever código, ver gráficos e explorar dados.
:::
