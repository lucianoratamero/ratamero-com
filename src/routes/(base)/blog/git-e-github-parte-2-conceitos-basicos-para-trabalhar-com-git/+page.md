---
title: Git e github parte 2 conceitos basicos para trabalhar com git
slug: git-e-github-parte-2-conceitos-basicos-para-trabalhar-com-git
date: 2016-02-18
updated_at: 2022-03-28
description: "eis que voltamos para a parte 2 dos posts sobre git e github! dessa vez, vou discutir alguns conceitos básicos necessários para quem quer trabalhar com git."
---
<a href="/assets/cover-git-2.png" target="_blank"><img src="/assets/cover-git-2.png" alt="Ilustração com logo do git e do github" /></a>

eis que voltamos para a parte 2 dos posts sobre git e github! dessa vez, vou discutir alguns conceitos básicos necessários para quem quer trabalhar com git. se ainda não leu o primeiro post, [façam o favor](https://www.ratamero.com/blog/git-e-github-parte-1-o-que-sao-e-como-usar/), porque não vou explicar de novo (#ranzinza). então vamos lá!

* * *

### merge e conflitos

a última coisa que discutimos no último post foi a questão de termos branchs diferentes para commits e tarefas diferentes. ter múltiplos branchs é importante para que uma tarefa não influencie na outra, mas o que importa no final das contas é que todas as tarefas estejam prontas, juntas, entregues.

<a href="/assets/merge.jpg" target="_blank"><img src="/assets/merge.jpg" alt="Ilustração de um merge, de uma branch se encontrando com a outra" /></a>

pra isso, os branchs paralelos precisam ser misturados novamente em um só, usando o processo que chamamos de **merge**. **merge** significa, ao pé da letra, **convergir**. essa convergência é necessária para que saibamos que tudo funciona em conjunto e para que possamos criar uma nova versão do projeto que está sendo desenvolvido.

isso se complica na hora que pensamos que, em branchs diferentes, os desenvolvedores podem mudar o mesmo arquivo, na mesma linha. quando isso acontece, ocorre o que chamamos de **conflito**. na hora do merge, o git tenta misturar o código (e geralmente é bem inteligente em se resolver sozinho), mas quando conflitos acontecem, é necessária intervenção manual no código para que tudo funcione bonitinho, então fiquem ligados pra que seu processo se adapte visando evitar conflitos.

### cherry-pick

digamos que no branch 1 temos uma tarefa e no 2, outra. pode acontecer o caso de que o branch 2 desenvolva algo que seria importante para o desenvolvimento do 1, mas, obviamente, temos o código de um separado do outro. nessas horas, podemos usar o **cherry-pick**.

<a href="/assets/cherry-pick.jpg" target="_blank"><img src="/assets/cherry-pick.jpg" alt="Ilustração de um cherry-pick, um commit de uma branch copiado para outra" /></a>

**cherry-pick** é o processo de pegar um commit específico, ou uma série de commits, e copiá-lo(s) para outro branch. pode ficar tranquilo, isso não vai interferir na hora do merge (mas pode dar a ilusão de que mais coisas foram mudadas na hora de gerar um pull request). use o cherry-pick com **muita** parcimônia.

### rebase

muitas vezes acontece de você criar um branch a partir de outro, mas perceber que devia ter esperado mais, porque foi feita alguma nova alteração importante no branch base. nessas horas, você pode usar o **rebase**.

<a href="/assets/rebase.jpg" target="_blank"><img src="/assets/rebase.jpg" alt="Ilustração de um rebase, uma branch mudando sua base para outro commit" /></a>

**rebase** é o ato de mudar o commit base de uma série de commits. ele é útil em alguns momentos, mas deve ser **evitado**, já que ele **altera o histórico do git e pode gerar inconsistências de dados** quando mais de uma pessoa está trabalhando no mesmo branch.

a maior utilidade que vejo no rebase é na hora em que você faz um commit local e, nesse meio tempo, alguém enviou um novo commit no repositório. nesse momento, para evitar um commit de merge na hora de sicronizar o código, você pode simplesmente usar o comando `git pull --rebase` pra pegar seu commit e colocar logo em seguida do que estava no repositório remoto.

### remotes

uma das coisas mais interessantes do git é a possibilidade de configurar múltiplas origens pra um mesmo projeto. assim, podemos enviar código de um projeto para múltiplos repositórios, e isso é feito a partir da configurações de **remotes**.

<a href="/assets/remotes.jpg" target="_blank"><img src="/assets/remotes.jpg" alt="Ilustração de um remote, um repo apontando para múltiplas nuvens" /></a>

geralmente, só temos uma origem remota pra cada projeto, mas podemos ter, por exemplo, um outro repositório remoto configurado para fazer o deploy da aplicação. esse processo é usado por alguns serviços de hospedagem de site, como o [heroku](https://heroku.com/).

### tag

quando você tem vários commits com várias funcionalidades diferentes, você tende a não saber mais muito bem em qual commit que tal feature ficou pronta. para que você possa nomear o estado do projeto em um commit específico, você pode usar uma **tag**.

<a href="/assets/tag.jpg" target="_blank"><img src="/assets/tag.jpg" alt="Ilustração de uma tag" /></a>

uma **tag** nada mais é do que um atalho a um commit específico, que descreve um estado do seu projeto. você pode, por exemplo, nomear de 1.0 a versão inicial de seu projeto e ir criando novas tags pra cada nova versão de produção.

* * *

por hoje, acho que é isso, pessoal. no próximo, e último post, vou discutir um pouco sobre boas práticas para desenvolvimento usando git. caso tenham alguma dúvida ou sugestão, só mandarem ver nos comentários, sim? abraços, e até a próxima! o/