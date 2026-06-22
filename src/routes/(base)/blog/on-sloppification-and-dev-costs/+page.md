---
title: On sloppification and dev costs
slug: on-sloppification-and-dev-costs
date: 2026-06-21
updated_at: 2026-06-21
description: or "why I personally believe that developers that are not using AI deserve a pay rise".
---
I want to start with the conclusion: I personally believe that developers that are not using AI for coding deserve a pay rise.

for people that know about my thoughts on AI, this is probably a logical conclusion. but for those who are not convinced, or that would like to understand a bit more about the whys, stay with me. breathe deep, this is a tough one.
## let's start with some disclaimers (you may skip this)

it's hard to talk about these topics, because discussing AI use on software development is tricky. you risk alienating some people if you're too careful with your words, and you risk offending others if you're not. so, for the sake of the argument, I'll try to present my thoughts in a way that establishes a common ground. hopefully.

as in all discussions, I will assume you always remember that I'm speaking in general. edge cases and model companies and teams will always exist. discussing them here is useless, since there's no such thing as a "one size fits all" opinion. so always assume that whatever I say is prepended with "in general".

second, this is not a discussion about what AI is good or bad for, or about the ethics of AI. I won't be talking about my opinions on the tech itself, so bring me to a bar and pay me a few beers if you want to discuss them (we'll need the alcohol). here, I'll try to be as down to earth as I can.

also, this is my opinion, folks. no need to be mad. always remember there's a human being on the other side of an internet discussion. I may also make jokes, or make things more dramatic than they are, because it wouldn't be me if I didn't.

ok, here we go.
## three things to keep in mind

to understand why I think that people should get a bonus for not using AI, we need to establish a few things.
### AI speeds up software development

*wait, I thought you were saying that people that do NOT use AI deserve a bonus*, you thought.

yes. exactly. stay with me.

we already have scientific studies on how AI can speed up software development. [while some are inconclusive, or end up implying that results may vary from negative to positive](https://sws.informatik.uni-leipzig.de/wp-content/uploads/2025/09/master_thesis_the_impact_of_llm_based_coding_assistants_on_developer_productivity.pdf), [some show that there is a real and significant gain in development speed](https://arxiv.org/html/2506.10051v1). 

since we're talking in general, and I don't want to talk too much about anecdotal stuff, let's assume a Good™ scenario, with gains of around 30%. yes, kind of a magic number. cool? cool.
### but AI generated code is "as good as" or "worse" than a good dev's code, never better

the general consensus is that [AI generated code tends to ramp up code complexity](https://arxiv.org/html/2511.04427v3) and [add code with "code smells"](https://arxiv.org/html/2603.28592v2) - you know, the classic [tech debt](https://en.wikipedia.org/wiki/Technical_debt). so if we want the best results, we would need to pair up these tools with a competent and experienced developer that can recognize bad code in real time or use the AI tools in better ways.

the thing is: competent and experienced developers already are good at what they do, and will deliver better code if they just make it themselves. they are the baseline.

sure, they can get *some* of the speed increase (and we're assuming they do for the sake of the argument), but usually the biggest speed ups are achieved by more junior people, with stinky code as a trade-off.

> friendly reminder: in general. there are edge cases, different ways to use AI, and person to person differences that will not be discussed here.

### and using AI will potentially deskill your team

this might be the most controversial and situational topic of the bunch (that's why I threw in the "potentially" there). just to sum up this one: using AI tools *can* and probably *will* deskill your team if they're not careful, or make their learning journey longer - be it because they're not engaging with the code as well as they could, or because they're not remembering how the code was implemented, since they didn't write it themselves. 

I'm not saying that it **surely** will deskill **everyone**; I'm not saying that your devs' brains will become goo if they touch AI. I'm saying that there is a [real *risk* that *some* of your devs will become over-reliant on AI tools](https://www.anthropic.com/research/AI-assistance-coding-skills#conclusion) (yes, even Anthropic thinks so, though their answer is, who could've seen it coming, **more** AI). we're seeing this happen [in other areas as well](https://www.sciencedirect.com/science/article/pii/S2949820126000123).

anecdotally, I've seen it happen, both with people I worked with, and with myself. it feels pretty obvious, to be honest.
### oh, and it costs money

did I forget to say that? well, here it is: it costs money. you have to pay your dev **and** the tools.
## so if you're keeping tabs, you know where this is going

*assuming a good scenario* (let's not talk about the bad ones), the pros and cons would be that AI tools:
- might speed your dev team up a bit. not 10x, not 2x, but a significant amount (single to double percentage points);
- will probably give you worse code than people by themselves would, with more tech debt. bad, broken, unsafe code in the worst cases, Good™ code in the best;
- risk making your team technically worse in the long run, and risk increasing the time it takes to transform junior devs into seniors, unless you have pretty strict guidelines on AI use;
- cost a significant amount of extra money.

if we have these in mind, we arrive at this conclusion: people in your dev team **that opt not to** use AI as much will tend to take a bit more time to get something done, but give you better code; will tend to keep their skills sharper in the long run; and will definitely save you money on that fancy AI subscription you're paying, even if it's means downsizing their AI subscription plan from the "Infinite Tokens" plan to the "I Only Have a Few Questions" plan.

so if the difference is just the type of dev person you get, and one costs more than the other, it's only fair that you just... **give them the extra money you'd spend on the AI tool.**
## no, really, give them the money

jokes aside, I don't think what I'm saying is too far-fetched, or that this should be applied to every scenario. what I'm saying is that it's funny how most **tech companies prefer to pay someone else** - be it Anthropic, OpenAI, Cursor, whatever -, **instead of investing in their own people**. how they are always eager to outsource expertise.

so here's the deal: if the dev person wants an AI subscription, sure, give them. heck, some cases even *require* it, like projects that could benefit from LLM knowledge and/or integration. and knowing the basics about how AI tools work is important, even if it is only enough to be able to discuss it with people and future proof yourself.

but AI is a tool that has real costs - like those fancy JetBrains IDEs or good programming courses - and hidden costs, like tech debt and potential deskilling. if a dev person says "no, I prefer to code it myself and learn something else", not giving them a bonus is effectively punishing them for saving you money.

also, giving them the extra money sends your devs some hints: you're not doomed for not adopting AI, and you're not wrong in investing in yourself; you can try to use it if you want, see if it fits with your workflow, but know that there are trade-offs; and always remember that you'll be responsible for the code you put out there, AI assistance or not. there's already so much pressure to adopt AI out there, this might be worth it.

it also forces your company to be more mindful about the money you spend on AI subscriptions. I feel like we're currently in a spot of "we need to give the devs all them tokens", and that's not healthy for anyone involved.

oh, and if you're thinking "but this only means that you'd be punishing people that choose to use AI instead", [you might need to read this post](#). :)

---

phew, I hope this whole thing made sense; this thought just crossed my brain while I was in the shower, and I just wanted to write it down so it doesn't keep nagging me. if there's anything that I missed, or if you want to curse at me and tell me I'm wrong about everything in life, talk to me on bluesky or mastodon. 

this post is just a thought, not a manifesto, so please treat it as so.

I tried not to put my opinions on AI in this post, but I KNOW I failed. it's hard to talk about money costs, when there are so many other costs associated with AI. but hey, I tried.

I didn't touch on a topic I wanted to, which is "what if we don't even need the increased development speed in the first place", but I thought it was too opinionated and didn't fit well with the rest of the post.

also, I did not use any AI tool to write this post (typos are my own), but I did use local models and Lumo to help me find the academic papers I linked. I still read their conclusions before linking them up, though.

so yeah, I hope to see you next time!