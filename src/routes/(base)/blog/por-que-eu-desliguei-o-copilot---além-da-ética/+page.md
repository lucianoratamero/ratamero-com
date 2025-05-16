---
title: por que eu desliguei o copilot - além da ética
slug: por-que-eu-desliguei-o-copilot---além-da-ética
date: 2025-05-16
updated_at: 2025-05-16
description: "faz duas semanas, eu fiz um experimento: desliguei tudo que era baseado em LLM. aqui estão os motivos, os resultados, e algumas reflexões."
---
hoje eu tava lendo uns posts de blog e dei de cara com esse post aqui, do Alberto Fortin: https://albertofortin.com/writing/coding-with-ai

em resumo:

> TLDR: LLMs are okay at coding, but at scale they build jumbled messes. I’ve scaled back my use of AI when coding and gone back to using my brain and pen and paper.

faz duas semanas, eu fiz a mesma coisa: desliguei tudo que era baseado em LLM pro trabalho. achei que seria legal compartilhar os motivos, os resultados e alguns pensamentos, por mais parecidos que sejam aos de Alberto. recomendo inclusive que leiam o post dele, é bem interessante.

e meu intuito é não discutir tanto a parte ética, apesar de eu colocar alguns dos meus pensamentos sobre isso no final do post. se você for uma pessoa só interessada na parte ética, pula pro final!

## antes de tudo, vou falar do que tentei

eu sei que tem uma parcela (pequena, mas extremamente chata) que vai olhar pra esse post e falar que eu não usei os LLMs de forma correta, ou que não configurei ou passei parâmetros suficientes pros modelos; então já vou logo me defender.

eu tentei **bastante coisa**: desde ferramentas feitas pro uso de LLM como o Cursor, até opções como o Continue + Ollama. múltiplos projetos, múltiplas linguagens de programação, múltiplos modelos, múltiplas abordagens.

também vou dizer que eu **não acho essas ferramentas inúteis**. como dev frontend, muita parte do meu trabalho é lidar com estruturas repetitivas, e esse é o melhor dos problemas pra serem resolvidos com LLM.

defesa feita, vamos falar dos problemas, começando pelos que todo mundo já sabe.

## os problemas óbvios

bom, o problema óbvio mais gritante é que o código gerado sempre - e eu digo **sempre** - é pior do que o código que você poderia escrever. se você acha que o LLM faz um código melhor que o seu, mais motivo ainda pra não usar e aprender a fazer por si só. afinal, **se você não sabe fazer tão bem quanto um LLM, como que você vai revisar o código gerado**?

"ah, mas é só dar acesso a sua base de código, fazer um *prompt engineering*, que tudo funciona bem", alguém vai dizer. vou ser direto e sincero com a minha opinião: se você tá tendo todo esse trabalho de ler artigo, testar o que funciona ou não, usar modelos diferentes pra problemas diferentes, **seria mais fácil aprender como resolver o problema**. você sairia sabendo mais e se sentindo uma pessoa mais confiante no que faz.

e aqui chegamos no meu ponto principal.

## meu jeito de programar tava mudando - pra pior

comecei a notar que eu escrevia duas palavras e fazia uma pausa, que variava de 2 a 10 segundos, esperando uma resposta do Copilot - resposta essa que precisava de modificação ao menos 70% das vezes. ok, tudo bem, é uma ferramenta útil, mas **ainda tá num estágio bem ruim**.

juro pra você que eu não teria problema em virar revisor de código, desde que o código **fosse bom**. e quanto maior o problema, mais ele erra, ou gera algo que exige adaptação. muitas vezes eu caía no ciclo de "não tá bom, ajeita isso pra mim, nossa, ficou pior".

e eu quase posso ouvir a pessoa dizendo "comigo funciona, você deve tá fazendo algo errado", mas a verdade é que se os LLMs fossem tudo isso que as pessoas dizem que é, **uma galera não estaria tendo esse problema**, eu incluído. se tem uma coisa que eu me orgulho como pessoa dev é que eu sobrevivi trabalhando em frontend desde os tempos da jQuery até as doideiras de hoje, e isso demonstra uma coisa: que eu **ao menos consigo** me adaptar a novas tecnologias.

mas quanto mais eu usava o Copilot, mas eu percebia que eu tava **perdendo a noção de como fazer as coisas, que meu cérebro ficava com preguiça de fazer na mão**, e eu ficava dependendo cada vez mais de uma ferramenta que não entrega bem, e que gera **muita frustração**.

## então eu desliguei o Copilot e...

imediatamente me senti uma pessoa improdutiva. essa é a parte que me irrita mais sobre isso tudo: **eu me senti lerdo e incapaz de entregar coisas rápido**. e, até certo ponto, eu tava correto em me sentir assim. agora, aquele trecho gigantesco de HTML que antes tava sendo gerado pra mim não tava mais aparecendo no autocomplete.

eis que eu descobri duas coisas: copiar e colar. claro que tô sendo sarcástico aqui, mas o que tava fazendo eu me sentir lento era **a falta do retorno visual dos próximos passos**. **era a dopamina** que era jogada no meu sangue toda vez o Copilot tava certo e eu não precisava digitar aquilo tudo, esquecendo de todas as vezes que eu tive que corrigir algo errado.

mas me forcei a passar por essa sensação, lembrar que eu trabalhei sem Copilot por mais de uma década, e que tá tudo bem. continuei o processo.

em dois dias, uma tarefa que era pra demorar uma semana tava pronta. o código tava limpo, lindo, *perfumado*. não tive que adaptar nada, porque não tinha nada pra adaptar; não tive que revisar nada, porque fui eu que fiz. eu me senti tão produtivo quanto antes - minto, eu me senti **mais** produtivo do que antes -, porque agora eu **sabia o que tava acontecendo**.

precisei passar por isso pra entender o óbvio, que **fazer as coisas com calma nos faz bem**. que meu problema com o uso do Copilot era que há uma tentação gigantesca de aceitar uma recompensa pequena em curto prazo, em vez de lutar por uma recompensa muito maior em longo prazo.

## quer dizer então que você não usa mais LLM pra nada, né?

dizer que sim seria um exagero. é fato que eu cancelei minha assinatura do Copilot e removi as extensões do meu editor de texto, mas vez ou outra eu ainda uso o Chato GPT (não é um typo).

um exemplo é quando eu quero converter componentes Vue escritos com a API de options pra API de composição + script setup. outro exemplo é revisar (mas não reescrever) textos grandes em inglês, principalmente quando é algo corporativo. ou seja, coisas que eu **sei fazer**, mas que o LLM vai me dar um retorno muito mais rápido, facilmente revisável.

mas vou dizer que não uso mais de um prompt por semana. fica a mensagem pro povo que gosta de LLM: **dá pra viver melhor sem essas ferramentas**.

mas e se essas ferramentas fossem boas?

## ética e ideologia

acho que não preciso dissertar sobre o quanto esses modelos de LLM foram desenvolvidos em cima de conteúdos com copyright. também acho desnecessário dizer o quanto de energia e recursos naturais e humanos são usados no desenvolvimento dessas ferramentas. esses pontos são totalmente factuais.

mas viver no capitalismo é isso: as empresas vão investir em coisas sem pensar na ética ou nas repercussões sociais. **os LLMs já existem**, e falar que a OpenAI é x, y ou z não vai fazer ela parar de explorar ninguém.

já que essas ferramentas já existem, o que nos resta é decidir se queremos usar elas ou não; ou melhor, **qual o limite mínimo que nos faria usar**. é o impacto energético? é a licensa do modelo? é a origem dos dados de treinamento? é o fato do processamento ser local ou remoto?

no final das contas, não foi nada disso que me fez tomar a decisão de cancelar o Copilot, mas o fato de eu ter certeza que **eu não preciso saber mexer com LLM pra garantir meu emprego**. de que eu não tô em risco de ser trocado por uma pessoa que sabe usar LLMs pra programar melhor e mais rápido.

pelo menos *por enquanto*.

---

fica aqui meu convite pra você também tentar parar de usar essas ferramentas. se tiver alguma dúvida, ou quiser me xingar, só falar comigo no mastodon/bluesky/telegram, ok? até a próxima!