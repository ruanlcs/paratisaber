---
title: Python
description: Introdução à linguagem Python para iniciantes - sintaxe, tipos, estruturas de controle e análise de dados.
---

**Python** é uma das linguagens mais populares do mundo e uma excelente porta de
entrada para quem está começando a programar. Ela tem sintaxe simples e legível,
próxima do inglês, e é usada em áreas como análise de dados, inteligência
artificial, automação e desenvolvimento web.

:::note[Pré-requisito]
Se você ainda não viu os conceitos de algoritmo, variável e laço, comece pela
[Lógica de programação](/programacao/logica/). Aqui vamos aplicar esses
conceitos na prática.
:::

## Primeiro programa

```python
print("Olá, mundo!")
```

O `print()` exibe algo na tela. Simples assim — sem ponto e vírgula, sem chaves.

## Variáveis e tipos

Em Python você não declara o tipo: ele é inferido pelo valor.

```python
idade = 25          # int (inteiro)
preco = 19.90       # float (real)
nome = "Ana"        # str (texto)
ativo = True        # bool (booleano: True ou False)
```

Para descobrir o tipo de algo, use `type()`:

```python
print(type(idade))   # <class 'int'>
```

## Entrada e saída

```python
nome = input("Qual é o seu nome? ")
print("Olá,", nome)
```

O `input()` sempre devolve texto. Para usar como número, converta:

```python
idade = int(input("Sua idade: "))
```

## Estruturas de decisão

Python usa **indentação** (espaços) para delimitar blocos — não usa chaves.

```python
idade = 20

if idade >= 18:
    print("Maior de idade")
elif idade >= 12:
    print("Adolescente")
else:
    print("Criança")
```

## Estruturas de repetição

**`while`** — repete enquanto a condição for verdadeira:

```python
contador = 1
while contador <= 5:
    print(contador)
    contador += 1
```

**`for`** — percorre uma sequência (lista, texto, intervalo):

```python
for i in range(1, 6):   # de 1 até 5
    print(i)
```

## Estruturas de dados essenciais

| Estrutura | O que é | Exemplo |
| --- | --- | --- |
| Lista (`list`) | Coleção ordenada e mutável | `[1, 2, 3]` |
| Tupla (`tuple`) | Coleção ordenada e imutável | `(1, 2, 3)` |
| Dicionário (`dict`) | Pares chave-valor | `{"nome": "Ana"}` |
| Conjunto (`set`) | Coleção sem repetição | `{1, 2, 3}` |

Exemplo com lista e dicionário:

```python
notas = [7, 8, 9]
print(notas[0])        # 7 (primeiro item)
print(len(notas))      # 3 (quantidade)

aluno = {"nome": "Ana", "idade": 20}
print(aluno["nome"])   # Ana
```

## Funções

```python
def somar(a, b):
    return a + b

print(somar(7, 3))   # 10
```

## Um exemplo completo

Calcular a média de três notas e informar o resultado:

```python
def media(notas):
    return sum(notas) / len(notas)

notas = [7, 8, 9]
m = media(notas)

if m >= 7:
    print(f"Média {m:.1f} - Aprovado")
else:
    print(f"Média {m:.1f} - Reprovado")
```

## Python para dados

Um dos maiores usos de Python é a análise de dados, com bibliotecas como:

- **NumPy** — cálculos numéricos e arrays eficientes.
- **pandas** — manipulação de tabelas (DataFrames).
- **Matplotlib** — gráficos.

Essas bibliotecas são a base de áreas como [Machine Learning](/machine-learning/)
e [Big Data](/big-data/).

:::tip[Boas práticas]
Siga a **PEP 8**, o guia de estilo oficial do Python: nomes descritivos,
indentação de 4 espaços e linhas curtas. Código legível é código fácil de manter.
:::
