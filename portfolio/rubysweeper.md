---
title: 'Portfolio: Rubysweeper'
layout: default
--- 

## Rubysweeper

Simple Minesweeper clone done entirely in Ruby, game run fully in the command line. Originally started solo, I was joined by fellow Dev Bootcamp student [https://twitter.com/MCBaylis](Mary Baylis) to help finish up the project.

Public repo available [https://github.com/secade/ruby-sweeper](here).

## Versions

#### 1.0 Beginnings

Originally it was just a simple print out of the game board with basic functions to sweep individual cells, flag, and crash/burn/die. It was 'functional' in that I could complete a game either by winning or losing, but was missing many basic functions and had to be run from inside the .rb file using Pry.

#### 2.0 Moving on Up

I dove into the program and started adding in significantly more functionality and better user interaction. My real pride here came from getting the 'oversweep' method working, or the ability for hitting one cell to trigger any nearby cells if it is 'clear', or not adjacent to any mines.

![Rubysweeper](/img/rubysweeper.png)

#### 3.0 I/O and Mary

Mary came on board and developed an I/O system that would allow users to interact more directly with the game, and also allow the game to be played outside of running Pry. We also completely reorganized the project, splitting everything into separate files, handling data outside of the main .rb files. We laid the project to rest here.

![Rubysweeper version 3.0](/img/rubysweeper3-0.png)

[Go Back](/portfolio/)