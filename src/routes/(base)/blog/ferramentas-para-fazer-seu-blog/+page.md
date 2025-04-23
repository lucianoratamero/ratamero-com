---
title: "#ajudaLuciano - Ferramentas para fazer seu blog"
slug: ferramentas-para-fazer-seu-blog
date: 2025-04-22
updated_at: 2025-04-22
description: "ontem, durante a live de 8 anos da Live de Python, o Dunossauro levantou uma bandeira ótima: crie a porra de um blog. muita gente não sabe bem como, então vou deixar aqui algumas das ferramentas que eu pessoalmente acho ótimas pra fazer um blog."
---
ontem, durante a live de 8 anos da [Live de Python](https://www.youtube.com/@Dunossauro), o Dunossauro levantou uma bandeira ótima: [crie a porra de um blog](https://crieaporradeum.blog/). muita gente não sabe bem como, então vou deixar aqui algumas das ferramentas que eu pessoalmente acho ótimas pra fazer um blog.

---

## só quero escrever uns negócio

olha, nada te impede de usar alguma plataforma proprietária, mas se você tá aqui, você provavelmente quer fugir delas e ter seus próprios dados. infelizmente, é um pouco difícil fazer isso sem saber um pouco de programação.

então recomendo que você comece criando uma conta no [Github](https://github.com/) ou (ainda melhor) no [Codeberg](https://codeberg.org/). com a conta e um pouco de conhecimentos de git e markdown, você pode usar qualquer ferramenta de geração de sites estáticos [SSG](https://en.wikipedia.org/wiki/Static_site_generator) e publicar em um domínio usando [Github Pages](https://pages.github.com/) ou [Codeberg Pages](https://codeberg.page/). caso você já tenha um domínio e não queira usar o domínio gerado automaticamente, você também pode usá-lo de graça.

daqui pra frente, vou assumir que vamos usar uma ferramenta de geração de sites estáticos e que estamos usando o Codeberg como plataforma. vamo lá!

## geradores de sites estáticos

*geradores de sites estáticos* são ferramentas que lêem seu conteúdo de algum lugar no seu computador (em geral arquivos `.md`) e geram páginas HTML prontas para serem servidas na web. existem várias dessas ferramentas, então vou colocar aqui as **minhas** favoritas, em nenhuma ordem específica.

### marmite

o [marmite](https://rochacbruno.github.io/marmite/) é uma ferramenta criada pelo nosso caro [Bruno Rocha](https://bruno.rocha.social/), escrita em Rust, e projetada pra ser extremamente veloz e direta ao ponto. ela te dá de cara tudo que você precisa: um bom tema visual, conversão de Markdown pra HTML, feed RSS, tudo.

caso você já tenha as ferramentas do Rust instaladas, você pode [instalar via `cargo`](https://rochacbruno.github.io/marmite/getting-started.html#quick-start), mas caso você não tenha, dá pra baixar o binário diretamente.

como eu disse, o marmite é simples e direto, perfeito pra quem só quer escrever uns negócio e publicar. não vou colocar o passo a passo aqui porque [a documentação é ótima](https://rochacbruno.github.io/marmite), mas basicamente é só rodar um comando pra criar um post novo, escrever em Markdown e gerar o HTML. 

testei localmente com os posts que já tenho no meu site (todos são em Markdown), e ele gerou todas as páginas e o RSS bonitinho, depois de eu adaptar um pouco os metadados.

como toda ferramenta simples, você vai sofrer um bocado a mais caso queira fazer algo um pouco mais rebuscado, então eu recomendo mais pra pessoas que só estejam interessadas em fazer um blog simples.

### astro

o [astro](https://astro.build/) é, na minha opinião, um ótimo meio termo. ele não é tão veloz quanto o marmite, mas também não precisa ser, a não ser que você tenha centenas ou milhares de posts. ele também oferece tudo que você precisa, e é bem mais flexível caso você queira algo mais que só um blog.

pra usar o astro, você precisa ter o [NodeJS e o NPM instalados]. depois, é só entrar em [astro.new](https://astro.new), escolher um dos templates e rodar o comando que eles te dão. no meu caso, escolhi o template de blog, que foi gerado usando `npm create astro -- --template blog`.

ele tem um passo a passo bem tranquilo de seguir (em inglês) e também te dá opções de adicionar [frameworks de frontend](https://astro.new/latest/frameworks/), pra quando você quer adicionar algo mais dinâmico nas suas páginas e posts. a documentação como um todo é ótima também.

assim como o marmite, é só criar um arquivo `.md` novo na pasta de conteúdo que você tem um post novo pronto. a diferença é que você pode rodar um servidor de desenvolvimento pra ver como as coisas estão sendo geradas em tempo real.

ele também funcionou com os meus posts em `.md`, depois de adaptar os metadados. um único problema que tive foi que eu gosto de ter o post de blog inteiro no meu feed RSS, mas [a própria documentação](https://docs.astro.build/en/recipes/rss/#including-full-post-content) tem instruções de como customizar o XML.

então se você quer algo mais customizado, ou pretende adicionar outras páginas além do blog, o astro é uma ótima ideia.

## menções honrosas

como não quero ficar eternamente enumerando opções (que são muitas), aqui ficam outras ferramentas que são tão boas quanto as que citei, mas que pessoalmente eu não usaria ou já usei:

- [Hugo](https://gohugo.io/): extremamente famoso, escrito em Go, mas não tão focado em blogs especificamente;
- [Pelican](https://getpelican.com/): pros pythonistas, o Pelican é ótimo pra blogs e pequenos sites, também razoavelmente flexível;
- [11ty](https://www.11ty.dev/): baseado em JS, a ideia do Eleventy é ter o mínimo de configuração possível, com o máximo de flexibilidade de conteúdo e altíssima performance de geração de conteúdo. ótimo pra galera do Node que precisa de algo mais parrudo que o astro;
- faz o teu: se você gosta de se ferrar (como eu), não é tão difícil fazer seu próprio site que usa algum framework web e ferramentas de conversão de Markdown. se quiser um péssimo exemplo, dá uma olhada no [código do meu site](https://github.com/lucianoratamero/ratamero-com).

## beleza, escolhi o meu e gerei os HTMLs. e agora?

agora é [seguir o passo a passo](https://docs.codeberg.org/codeberg-pages/) do Codeberg Pages. em resumo, o caminho mais fácil é:

- cria um repositório no Codeberg pro código fonte e taca seu código lá;
- cria um segundo repositório no Codeberg chamado `pages` (tem que ser esse nome). não inicializa com nada não, e deixa a página com as instruções finais aberta;
- na pasta do seu projeto, cria uma pasta `pages`;
- dentro dessa nova pasta, cria outro repositório (`git init`) e aponta pro repositório `pages` usando os detalhes da página de instruções no Codeberg;
- quando tiver com o conteúdo pronto, gera os arquivos HTML e copia tudo pra pasta `pages`;
- commita tudo e dá push pra ambos os repos.

se tudo deu certo, você vai ter seu site pronto e acessível em `https://nome-do-seu-usuario.codeberg.page`. quer um post novo? adiciona o conteúdo, gera e copia o HTML, faz o push, tá no ar.

se quiser exemplos de como isso funciona, dá uma olhada nos meus [dois](https://codeberg.org/lucianoratamero/astro-blog)  [repositórios](https://codeberg.org/lucianoratamero/pages) no Codeberg, tem todos os detalhes lá. caso queira usar o astro então, é só fazer fork e seguir com a vida.

depois é [configurar seu domínio](https://docs.codeberg.org/codeberg-pages/using-custom-domain/), caso queira e tenha um, e seguir postando! qualquer dúvida ou sugestão, manda aqui nos comentários ou fala comigo no [Mastodon](https://bolha.us/@lucianoratamero) ou [Bluesky](https://bsky.app/profile/ratamero.com). abraço pra quem é de abraço e até a próxima!