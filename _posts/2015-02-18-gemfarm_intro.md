---
title: "Gemfarm Preview"
layout: post
topcolor: red
excerpt_separator: ""
excerpt: "Although I did want to take a big leap forward from the old CLI-based game, I didn't want to destroy my own sanity by doing something really out there/crazy or too technically difficult for me. I thought back to some of the oldest/simplest games I could think of and I remembered my childhood love for Pokemon- the _original_ pokemon, Red and Blue. And I knew it- I wanted a game that looked and felt like an old tile-based, nearly black-and-white game."
---
# New Project: Gemfarm
## The Inspiration

Although I have no desire to do it professionally, I've always had a desire to do some video game development. My old college roommate and good friend is now a professional indie dev with the [Hitbox Team](http://hitboxteam.com/) studio and I was able to meet a lot of other really passionate devs by attending PAX Seattle last summer. Suffice to say, my appetite was whetted.

After working on a homebrew, ruby CLI version of [minesweeper](/portfolio/rubysweeper/), I wanted to go a lot further. Rather than just a CLI-based game, I wanted something that had visuals and sounds- something that _felt_ more like a game. So a fellow Dev Bootcamp student and I did some searching, some twitter research, and settled on the simple render library for Ruby called [Gosu](http://www.libgosu.org/).

## Concept

Although I did want to take a big leap forward from the old CLI-based game, I didn't want to destroy my own sanity by doing something really out there/crazy or too technically difficult for me. I thought back to some of the oldest/simplest games I could think of and I remembered my childhood love for Pokemon- the _original_ pokemon, Red and Blue. And I knew it- I wanted a game that looked and felt like an old tile-based, nearly black-and-white game.

Once I had the aesthetics locked into my head, I knew I'd have to keep the gameplay elements pretty simple- you can't have an amazing fighting game or shooter using that old style, so I started to think what would be easy to get as a sample. After some consideration, I decided on a farmsim- you'd play a farmer who raised some crops! From there, and some excited chatting with my future coconspirator [Mary Baylis](http://marycbaylis.github.io/), we came up with a few more features, an end game, and some gameplay elements.

Again, the main goal of this is not to make a revolutionary game- just for development practice. After all, I've only been doing development for about 6 weeks right now, and we knew pumping out a game made practically from scratch would be be an enormous challenge. And it is.

## First Steps

The first challenge came from building our little engine from scratch- tile-based movement, animation, and handling the update/draw loops. Gosu is fairly lightweight, having your basic window and drawing controls as well as an update and a draw loop that run 60 ticks/second- and nothing else. We started off by throwing together some really simple 16x16 pixel art and then embarked on the movement engine late on a Saturday night.

Here's what we've got so far:

<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/KDbtDBXPrwM" frameborder="0" allowfullscreen></iframe></div>

## The Future

There's a lot more to do for Gemfarm- tons of additional features to implement and work to add in. I spent 4+ hours today tracking down a bug in the movement engine- while adding in the ability to face a new direction when you tap lightly, I exposed an old bug that had been in place but invisible since the first night's worth of work. Starting to really feel like a developer.

If you like what you see here and want to learn more about Gemfarm, check out the [github repo](https://github.com/secade/gemfarm)- all code is open and available for your viewing pleasure!
