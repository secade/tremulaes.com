---
title: "Portfolio: Blackmetal B* Demo"
layout: default
topcolor: green
---

# Blackmetal B* Demo

![Blackmetal Gameplay](/img/blackmetal-gameplay.jpg)
<div style="margin:0 auto;text-align:center;">Snapshot of some Blackmetal B* action.</div>

Over the course of a weekend, I dove back into my beloved Ruby language and [Gosu](https://github.com/gosu/gosu) library to slap together another little game demo. I've always enjoyed top-down shooters a great deal- the first PC game I can ever remember playing was the beautiful [Tyrian](http://en.wikipedia.org/wiki/Tyrian_%28video_game%29) top down shooter that offered pretty impressive music, graphics and even storyline for it's time. Even 20 years old, the game remains fun and very playable.

As sort of an homage to Tyrian, I decided to build a small demo that shared some basic gameplay with it. I also wanted to do it in under a strict deadline as an extra challenge and so contributed no additional code after 48 hours had expired, working only from saturday morning until late Sunday night.

## The Design

Overall, the game itself is fairly small. I started off building simply the gameplay where your ship fights a never-ending horde of enemies that swoop down and sort of try to kill you. There isn't a whole lot more to what is going on- just the player, a horde of enemies and lots and lots of bullets. 

Once I got the core shoot'em'up features running, I was almost at a loss as to what to do next. There were so many paths I could have gone down to add features, but with such a tight and limited schedule it was hard to know what would be best. In the end, I went with flashy- adding in additional weapons. An alternate gun was added on top of the single bullet fire, and eventually a timed starbust-style bomb was added in as well.

With more weapons came a need for additional enemies. Since I already had enemies that floated down and moved in near random patterns, I thought a more static turret enemy would be cool. I added them in and have them scroll down at a slower pace, and rather than firing randomly, they attack at regularly timed intervals with missiles that actually fire to the player's position at time of firing- finally got to use some of that trig from high school math.

Next on my list came a menu UI that would allow the player to select difficulty and track their high scores for each difficulty level. Implementing ActiveRecord into the project was surprisingly easy and the database setup was extremely light and simple. Building the menu UI with some cool graphical effects was probably one of the most challenging aspects of the project as a whole- text with changing colors and a sliding menu certainly looked nice, but man, what a pain to put into place!

![Game Title and Menu](http://snag.gy/xY75M.jpg)
<div style="margin:0 auto;text-align:center;">Game Title/Menu Screen</div>

## The Technical
  
Blackmetal B* was perhaps the most challenging development I've ever done. Keeping the project's code design clean was one of my biggest focuses of the project. I tried my best to follow a lot of guidelines laid down by [Santi Metz](http://www.poodr.com/) as I built my code and I'm really proud of how it came out.

Keeping methods small, keeping classes slim and never building anything larger than what I needed helped keep my codebase small and sleak. Implementing new features as vertical slices was almost a breeze because I always knew where things needed to go and dependencies were small. I struggled a lot with deciding how to build a good project file structure, but since it was a short project I just decided to ignore it and kept everything dumped into the main file folder. Since it was a small project, this wasn't very inhibitive, but that would likely be the first change I'd make if I wanted to continue working on the project.

The artwork for the project was as minimal as possible. I reused everything I possibly could- the player's ship was just the squid token from this very website, the floating enemies were the protagonist from my last project [Gemfarm](/portfolio/gemfarm/), the background was some NASA photo, and all the bullets were made using [PiskellApp](http://www.piskelapp.com/), great for making simple pixel art. I had a lot of fun making the animations, but I tried to keep it as simple as possible so that I could focus on the game code itself instead of art. There was no music or sound of any kind.

![Spinning star animation](http://piskel-imgstore-b.appspot.com/img/0066956b-0d76-11e5-a0ac-c578120a4d79.gif)

One of the biggest blockers I ran into came after the first day of development. After more than a few sprites would get onto the page, everything would start to slow down until it was crawling and completely unusable, usually about 10-15 seconds into gameplay. At first, I thought it might have to do with Ruby's garbage collection and issues with my collision detection engine. I spent several hours reading up on advanced collision detection strategies and garbage collection, all to no avail. 

After a good night's sleep, I woke up and realized the issue may lie elsewhere. Although the images files were themselves small, I was reloading them each time a new sprite was created. Every single sprite had to load not only itself but also it's entire image into memory. Realizing that may be eating up all my memory, I decided to build a small asset library class to handle images and fonts. 

{% highlight ruby linenos %}
class Bullets
    attr_reader :small, :enemy_small, :light_orb, :spinning_star

    def initialize(game)
      @small = Gosu::Image.load_tiles(game, "assets/img/bullet.png", 6, 13, false)
      @enemy_small = Gosu::Image.load_tiles(game, "assets/img/enemy_bullet.png", 6, 13, false)
      @light_orb = Gosu::Image.load_tiles(game, "assets/img/light_orb.png", 8, 8, false)
      @spinning_star = Gosu::Image.load_tiles(game, "assets/img/spinning_star.png", 8, 8, false)
    end
  end
{% endhighlight %}

Once that was resolved, everything began moving at a good speed and I ran into no further issues with memory. Loading all my images up at game start and simply referring to them was a nice strategy and one that I definitely plan on using in the future for bigger projects, though projects with MonoGame and XNA have this built in with their content pipelines.

Once of the things I'm most proud of with the code here is the small but still functional state machine that I built into the project. Gosu is a light render engine and doesn't come with state built into it at all, but I wanted a way to move between different parts of the game- namely the title screen and the gameplay itself. I tried to keep at as simple as possible, moving between the different states cleanly, with plenty of room for additional states to be managed as well.

## The Ugly

Although I am proud of a lot of different aspects of this game, especially under the time constraints, there is definitely some terrible practices and code uses involved. I used some nasty class variables with my object factories practically as global collections because I couldn't find a better way to give appropriate access to my collision engine; getting rid of those would absolutely be my first refactor. I have a pretty poor understanding of the factory design strategy and would want to research it a little more to see better ways to implement it.

I also strongly dislike my collision engine. It's very straight forward and simple but is extremely inefficient- every object being calculated against every other object each cycle. I tried to cut this down by checking only enemies against player objects, but it's still functionally O(c^n). After reading up on collision engine strategies, I discovered that this is a pretty common issue in game dev and better solutions can take a really significant amount of time to draw up. 

{% highlight ruby linenos %}
class CollisionEngine
  def self.check(player)
    baddies = Enemies.enemies + Bullets.enemy_bullets
    goodies = [player] + Bullets.player_bullets
    baddies.each do |b|
      goodies.each do |g|
        if b.collide?(g)
          b.collide(g)
          g.collide(b)
        end
      end
    end
  end
end
{% endhighlight %}

Another glaring opportunity for improvement is my enemy movement strategies- I just threw in a bunch of randomized elements but their use is completely unscalable and largely unusuable if I actually want to program in anything heavier or more intentional. I'd like to develop a better strategy that can accept plotted out trajectories or behaviors for more control, though the small scale of the project didn't really necessitate it. Just a personal desire to have better enemies, or something close to a functional AI.

## The Result

Overall I was really pleased with the Blackmetal B* Demo. I was surprised as how much I was able to do in just a weekend, and it came out looking pretty decent, even with the hilariously repurposed art. This project really pushed my understanding of OO design patterns and got me thirsty for better understanding of design strategies and solutions for common programming problems. As a second venture into game development, I couldn't have been happier with this demo project.

I hope to take this project and do even more with it in the near future, though I'll likely be moving away from Ruby for next steps. I'm looking pretty heavily at either Unity or MonoGame for frameworks, writing in C#. I'd like to start building more complete samples and to take on heavier burdens which likely means using a better platform than Ruby and Gosu. It's going to be a real challenge, but I want to do Blackmetal B* the honor it deserves by bringing it to life with the right tools for the job.

Check the [Github Repo](https://github.com/secade/blackmetal-b-star) for the code, and feel free to contact me if you want to know anything else about my game dev adventures or the Gosu library.