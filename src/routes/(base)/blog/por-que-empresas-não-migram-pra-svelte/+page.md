---
title: Por que empresas não migram pra Svelte?
slug: por-que-empresas-não-migram-pra-svelte
date: 2025-04-14
updated_at: 2025-04-14
description: quanto mais eu trabalho com outras tecnologias, mais vejo que trabalhar com Svelte é maravilhoso. então por que empresas não migram pra Svelte? e o que podemos fazer sobre isso?
---
quanto mais eu trabalho com outras tecnologias, mais eu vejo que trabalhar com [Svelte](/notes/Svelte) é **maravilhoso**. o modelo mental é simples, os módulos embutidos resolvem praticamente tudo do dia-a-dia e o resultado é uma aplicação leve, performática, bonita, acessível e fácil de usar.

então por que as empresas não migram pra Svelte? e o que nós podemos fazer sobre isso?

---

acho que consigo resumir meu pensamento em alguns pontos, então aqui vai o tl;dr:

- as empresas que **vendem** frontend moderno **acham "mais fácil"** contratar pessoas e vender projetos que usam React ou Vue;
- empresas que **compram** esse software **não querem o risco** de perder dinheiro comprando algo que usa uma ferramenta vista como nova, quando as alternativas são mais sólidas e famosas, como React e Vue;
- empresas em geral não querem **gastar dinheiro** pesquisando ferramentas novas, quando as que existem funcionam.

vou usar o React como exemplo principal pra comparar, mas mais como um símbolo de ferramentas com maior adoção. então bora explorar cada tópico um pouquinho mais.

## contratar pessoas e vender projetos em React é "mais fácil"

já ouvi essa frase várias vezes, principalmente quando citei que Svelte - principalmente o Svelte 5 - era muito fácil de aprender e de manter a longo prazo. as empresas adotam essa postura de contratar pessoas e vender projetos em React por ser **uma decisão mais fácil**, cujos **custos são fáceis de estimar**, mesmo que isso acarrete em ineficiências.

por exemplo, abrir vagas em Svelte significa:

- **ter gente interna** que treine pessoas em Svelte (mesmo que o treinamento seja ridiculamente curto);
- **saber qual o preço de mercado** de pessoas que trabalham com Svelte;
- **aceitar que muito menos pessoas vão se candidatar**, por mais que qualquer pessoa que saiba outros frameworks consiga trabalhar com Svelte em pouquíssimo tempo.

na hora de vender um produto pra outras empresas, **convencer a pessoa** que tá te contratando que seu projeto vai ser mais estável e mais fácil de manter em longa data **já é uma baita tarefa**. isso se torna ainda mais difícil se essas pessoas não conseguirem reconhecer imediatamente a ferramenta principal que vai ser usada no projeto, sejam essas pessoas devs ou não. as chances de tomar uma decisão correta crescem muito se essa ferramenta que vai ser usada já for famosa.

> a verdade é que o caminho mais fácil não é o que as pessoas dev querem, ou o que é objetivamente melhor pro produto, mas o que as empresas já usam.

## comprar projetos em tecnologias "novas" é um risco

acho que não preciso explicar muito sobre isso. React, por exemplo, é um projeto famoso desde 2013; o Angular, desde 2010. foram projetos extremamente inovadores, que mudaram o jeito com que a gente faz frontend. o futuro dessas ferramentas é visto como algo 100% garantido. algumas pessoas já chamam ferramentas como o React de "ferramentas de legado", que ficarão em bases de código por décadas.

**e isso é algo que o Svelte não é, e não vai ser tão cedo.** 

não é um problema só de adoção, documentação ou ecossistema, mas de **percepção de longo prazo**. mesmo nós, que gostamos e acompanhamos o Svelte faz muito tempo, não temos certeza de até quando a Vercel vai ter dinheiro pra bancar o desenvolvimento do Svelte, e mesmo que a Vercel fosse uma empresa com uma marca mais forte, não temos como comparar ela com a Meta.

então na hora de comprar um projeto, o nome React tem peso.

## empresas não querem investir em ferramentas "novas"

é rara a liberdade das pessoas dev pra criar projetos nas tecnologias que elas querem dentro de empresas. mesmo quando, em raríssimas situações, as pessoas dev possam tomar de decisões de maior impacto, sempre há a necessidade de explicar os motivos da adoção de uma nova ferramenta pra quem é gerente, ou é da parte de negócios.

isso **quando essa discussão pode acontecer**, que também não é algo comum de acontecer. 

para as empresas, **minimizar riscos vem antes de investir em inovação**. por isso, o tempo de estudo em uma ferramenta nova, mesmo que sejam poucas horas, significa "perder dinheiro" pro pessoal de negócio, principalmente quando React funciona, **e funciona bem**.

## então o que podemos fazer?

antes de tudo, precisamos continuar o trabalho que já fazemos: traduzir documentação, criar conteúdo, publicar ferramentas novas, etc. também acho óbvio dizer que, no caso do Brasil, **nossa comunidade perdeu bastante força**, e falta gente pra tomar a frente de fazer encontros online e conteúdos em língua brasileira (não foi um typo). sem esses fatores, fica muito difícil mudar a cabeça de empresas.

mas, **na minha opinião**, o mais importante é **mostrar como é objetivamente melhor** usar Svelte pras pessoas que trabalham com a gente. isso significa criar e compartilhar aquele projetinho de fim de semana com a galera, [fazer um blog](https://crieaporradeum.blog/), conversar com mais gente, tomar pra si a decisão de fazer um projeto interno da empresa usando Svelte.

e eu sei que nada disso é fácil de fazer. a gente já **trabalha demais**, toma **risco demais** de ser demitida, e, em grande parte, **ganha pouco** pro que a gente faz.

mas como em tudo na vida, **a gente só ganha confiança** e transparece essa confiança aos outros **quando a gente sabe como e quando usar as ferramentas** - suas aplicações, seus limites, seu produto final. sem essa confiança, a gente não convence nem nós mesmos de que dá pra usar Svelte em projetos grandes e corporativos.

pra fechar, deixo aqui o link pro [código do meu blog](https://github.com/lucianoratamero/ratamero-com) e pras [minhas ferramentas de fazer live]. bora compartilhar algo em Svelte? 