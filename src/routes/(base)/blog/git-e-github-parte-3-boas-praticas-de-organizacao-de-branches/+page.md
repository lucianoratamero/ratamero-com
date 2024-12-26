---
title: Git e github parte 3 boas praticas de organizacao de branches
slug: git-e-github-parte-3-boas-praticas-de-organizacao-de-branches
date: 2016-02-19
updated_at: 2022-03-28
description: "chegamos à parte 3 dos posts sobre git e github! nos outros dois, falei sobre o que são o git e o github e slguns conceitos básicos pra começar a usar o git. hoje, vou falar mais sobre algumas boas práticas pra organização de branches, baseado nas sugestões do git flow."
---
<a href="/assets/cover-git-3.png" target="_blank"><img src="/assets/cover-git-3.png" alt="Ilustração com logo do git e do github" /></a>

chegamos à parte 3 dos posts sobre git e github! nos [outros](https://www.ratamero.com/blog/git-e-github-parte-1-o-que-sao-e-como-usar/) [dois](https://www.ratamero.com/blog/git-e-github-parte-2-conceitos-basicos-para-trabalhar-com-git/), falei sobre o que são o git e o github e slguns conceitos básicos pra começar a usar o git. hoje, vou falar mais sobre algumas boas práticas pra organização de branches, baseado nas sugestões do [git flow](https://github.com/nvie/gitflow).

* * *

### o que é o git flow?

o **git flow** é uma extensão do git que permite uma maior organização e agilidade na hora de lidar com o git. ele segue uma série de convenções que caracterizam alguns tipos de branches com responsabilidades diferentes, próprias pra cada etapa do processo de desenvolvimento. vou detalhar melhor o papel de cada um dos tipos de branch.

**lembre-se:**

essas são apenas **sugestões** minhas e das próprias convenções do git flow.

o uso dessas sugestões muda de projeto a projeto, apesar dessas sugestões funcionarem em grande parte dos casos.

### branch `master/main`

<a href="/assets/master.jpg" target="_blank"><img src="/assets/master.jpg" alt="Ilustração de uma branch principal, chamada master ou main" /></a>

o branch `master` (ou, preferivelmente, `main`) é o branch no qual está o código que está em **produção**, ou seja, que está sendo **diretamente usado pelos clientes**. ele é caracterizado por sua grande quantidade de **tags**, que refletem cada versão do projeto que foi pra uso corrente. nele, não se deve ter commits soltos; devemos apenas adicionar commits nele através de merges de branches de `release` e de `hotfix`.

### branch `develop`

<a href="/assets/develop.jpg" target="_blank"><img src="/assets/develop.jpg" alt="Ilustração de uma branch paralela à principal, chamada develop" /></a>

o branch `develop` é o que contém o código previsto para a próxima `release`, ou seja, o próximo código que irá pro ar. nele, também não devemos commitar diretamente, deixando que seu código seja fornecido pelos branches de `feature` e `hotfix`, mas essa regra é um pouco mais flexível que a do `master`. uma boa prática é sempre deixá-lo estável, pronto para ir para o ar a qualquer momento, para evitar que uma funcionalidade não vá pro ar por causa de instabilidade de outras.

### branches de `release`

<a href="/assets/release.jpg" target="_blank"><img src="/assets/release.jpg" alt="Ilustração de uma branch saindo de develop e dando merge na principal" /></a>

os branches de `release` são aqueles que resumem o que uma nova versão do seu projeto terá. ele tem a responsabilidade de sair do `develop`, se mergear no `master` e no `develop` e, ao mergear no `master`, criar uma `tag` com o número da nova versão. geralmente, recebem o nome `release/[numero-da-versao]`. na minha experiência, acho uma má ideia commitar em branches de `release`, pelo simples motivo que, assim, temos certeza de que todo o código veio dos `hotfixes` e das `features`. dessa forma, os branches de `release` servem **apenas como um ritual** para que você tenha **certeza** do que está colocando no ar e qual é a versão desejada. é uma burocracia que já salvou minha vida algumas vezes. ;)

### branches de `hotfix`

<a href="/assets/hotfix.jpg" target="_blank"><img src="/assets/hotfix.jpg" alt="Ilustração de uma branch saindo da principal e dando merge na principal e na develop" /></a>

os branches de `hotfix` são os que são abertos na hora que algo em produção dá problema. são branches criados a partir do `master` e que se mergeiam novamente no `master` e no `develop`, já que precisamos das correções também no código que está sendo desenvolvido. geralmente, recebem o nome `hotfix/[numero-da-versao]`. eles também recebem suas próprias `tags`, que servem para dizer que, nesta versão, o problema x foi corrigido.

### branches de `feature`

<a href="/assets/feature.jpg" target="_blank"><img src="/assets/feature.jpg" alt="Ilustração de uma branch saindo da develop e dando merge na develop" /></a>

os branches de `feature` servem para, bem, features, né. eles partem do `develop` e mergeiam também no `develop`. geralmente, recebem o nome `feature/[descricao-da-funcionalidade]`. neles, commitamos o que é necessário para novas funcionalidades ficarem prontas, apesar de que eu, novamente, não recomendo que sejam feitos commits diretamente nele. o motivo disso é que, ao meu ver, features têm a tendência de terem muitos commits, o que deixaria difícil a revisão do código em um _pull request_. recomendo que, a partir dos branches de `feature`, sejam criados branches de `topic`, que terão o conteúdo de uma parte da funcionalidade, em um tamanho que permita a fácil revisão do código por outras pessoas.

### branches de `topic`

<a href="/assets/topic.jpg" target="_blank"><img src="/assets/topic.jpg" alt="Ilustração de uma branch saindo de uma feature e mergeando na mesma" /></a>

os branches de `topic` são os coringas. geralmente, recebem o nome `topic/[nome-do-topico-abordado]`. são usados em qualquer lugar em que seja legal ter mais de um tópico, para facilitar a revisão de código. na real, uso os branches de `topic` saindo dos de `feature` e mergeando nos mesmos, ou partindo de um branch de `hotfix` e mergeando nos mesmos. são os menores branches, feitos para serem lidos e revisados rapidamente.

### e o que o git flow tem a ver com isso tudo?

o git flow, como eu disse, é uma extensão do git. ele cria comandos que servem de atalhos para os processos descritos acima. ele tem comandos para abrir e fechar `releases`, `features` e `hotfixes`, e é facilmente configurável. se essa organização de branches te interessou, acho que vale a pena dar uma olhada no [repositório deles](https://github.com/nvie/gitflow) e ler o [post sobre o workflow deles](https://nvie.com/posts/a-successful-git-branching-model/). nesse post, eles detalham melhor o que é realmente necessário ser feito pra realizar essa proposta de organização.

como sempre, qualquer dúvida ou sugestão, é só falar nos comentários. espero que tenham gostado dessa série de posts e que tenha sido útil :D

eu fico por aqui, até a próxima! o/