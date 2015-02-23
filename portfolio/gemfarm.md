---
title: 'Portfolio: Gemfarm'
layout: default
topcolor: green
--- 

## Gemfarm

![Old Homepage](/img/gemfarm-gameplay.png)

The beginnings of Gemfarm are detailed more thoroughly in [this blog post](/2015/02/18/gemfarm_intro/), but in preparation of me beginning my time in the intensive portion of [code school](/portfolio/dev-bootcamp/), I've decided to go ahead and put Gemfarm to rest now that I've reached a decent stopping point.

Gemfarm is a small sample game about a farmer named Ruby trapped in a tiny world on which she farms. I intentionally chose to do a game modeled after a classic Gameboy style- tile-based movement and extra basic colors (primarily white, black, and two shades of gray). Special sprites use a single color to splash a little more life into the game. Take a look below at the original gameplay sample:

<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/KDbtDBXPrwM" frameborder="0" allowfullscreen></iframe></div>

#### Updates

I spent a week working on the project total, going from no knowledge of how to build a game to a functional, if boring, usable game. The library that I used is called [Gosu](http://www.libgosu.org/) and is very lightweight- it handles some basic drawing functions by creating a window on which you can call all your draw commands, some basic User Input help with easy, built in methods for reading keyboard input, and the window class comes with a basic gameloop built in it- empty update/draw functions running at approximately 60 ticks/second.

Everything else was built by myself from raw Ruby. All graphics were created by me for use in this game and all sounds, excepting a 'bubble' sound effect, were also made just for this game using (Famitracker)[http://famitracker.com/]. Graphics were made using the online pixel-art editor (Piskell)[http://www.piskelapp.com/] which came with really useful tools for handling animated sprites and automatic creating of spritesheets.

The biggest challenge for this project came in the overall code design of the project. I've been learning coding for about 7 weeks now and handling the complexity and scale of this was surprisingly difficult. Knowing when to create new classes and objects is a talent and one that I'm sorely lackling- a quick review of [my code](https://github.com/secade/gemfarm) reveals about twenty different things that should be seperated into their own classes and objects, but I was often lacking either understanding or time.

![Ruby Spritesheet](/img/gemfarm-ruby.png)

Still, the project did come together. This was the first gui I'd ever designed programmatically and it was awesome to see my work come together and become something that users could actually interact with directly. Every new feature implemented, whether it was the text ability for slow scrolling onto a screen or the goofy title screen that I eventually made, was a joy and felt like a victory. 

I really pushed my limits here and although I'm sad to leave Ruby behind- after all, I have a billion ideas to make the gameplay better, smoother, and more interesting- but it's time to move on to my next project and focus on succeeding in code school. I enjoyed meeting Ruby and look forward to creating more fun and exciting projects like this one. 