---
title: Hadoop
description: Fundamentos do Apache Hadoop - HDFS, MapReduce e YARN.
---

O **Apache Hadoop** é um framework open source que popularizou o processamento de
[Big Data](/big-data/). Ele permite armazenar e processar enormes volumes de
dados distribuídos por um *cluster* de máquinas comuns, tolerando falhas de
hardware.

## Os três componentes principais

### 1. HDFS (Hadoop Distributed File System)

É o **sistema de arquivos distribuído** do Hadoop — a camada de armazenamento.

- Quebra arquivos grandes em **blocos** e os espalha por várias máquinas.
- **Replica** cada bloco (por padrão, 3 cópias) para tolerar falhas: se uma
  máquina cai, os dados estão em outras.
- Arquitetura **mestre-escravo**: o *NameNode* (mestre) sabe onde está cada bloco;
  os *DataNodes* (escravos) guardam os blocos.

### 2. MapReduce

É o **modelo de processamento** original do Hadoop, em duas fases:

- **Map:** cada máquina processa sua parte dos dados e gera pares chave-valor.
- **Reduce:** os resultados são agrupados pela chave e combinados no resultado
  final.

Exemplo clássico (contar palavras): o *Map* conta palavras em cada pedaço; o
*Reduce* soma as contagens de cada palavra.

### 3. YARN (Yet Another Resource Negotiator)

É o **gerenciador de recursos** do cluster. Ele distribui CPU e memória entre as
tarefas e agenda os trabalhos, coordenando quem processa o quê.

## Quando usar

Hadoop é forte para **processamento em lote (batch)** de volumes gigantescos, onde
a leitura e escrita em disco não são o gargalo crítico. Para processamento rápido
e iterativo, o [Spark](/big-data/spark/) costuma ser preferido.

:::tip[Para fixar]
Associe os três: **HDFS** = onde os dados ficam; **MapReduce** = como são
processados; **YARN** = quem gerencia os recursos do cluster.
:::
