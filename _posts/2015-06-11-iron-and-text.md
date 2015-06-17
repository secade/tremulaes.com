---
title: "Iron and Text"
layout: post
excerpt_separator: ""
excerpt: "Every minute of that work was exciting to me! Before I started with IT, I (apparently) knew surprisingly little about computers for someone who had been using them pretty much his whole life. Having the opportunity to learn about individual machine architecture and slowly moving up into systems design and trying to grasp how the web worked was a very stimulating challenge and I only wanted more. Eventually, I also developed a fascination with development and got into that, but my love for the hardware side of things hasn't gone away."
---

# Iron and Text
## The Greatest Dependency

I started my journey into the world of tech first with hardware. I was working as a low level IT tech at a call center, handling their internal call center needs- everyone's favorite support desk role. Over time, I was fortunate enough to be able to get involved with some higher level work, getting to play with some basic server administration and database management.

Every minute of that work was exciting to me! Before I started with IT, I (apparently) knew surprisingly little about computers for someone who had been using them pretty much his whole life. Having the opportunity to learn about individual machine architecture and slowly moving up into systems design and trying to grasp how the web worked was a very stimulating challenge and I only wanted more. Eventually, I also developed a fascination with development and got into that, but my love for the hardware side of things hasn't gone away.

Since moving into the development space of the tech world, I was pretty surprised to find a big gulf between the systems side and the code side of application management/deployment- what is apparently the 'Development' vs 'Operations' issue. It always seemed to me that these sides are intrinsically linked- after all, what good is code if you have no way to get it to your consumers? 

![Development vs Ops](http://dev2ops.org/wp-content/uploads/2010/02/WallOfConfusion.png)

While the concepts behind the DevOps movement are nothing new, the recent buzz around the word and that particular part of the industry has brought this Dev vs Ops argument pretty harshly to light. Still, though, I hear a lot of developers arguing that deploying code isn't their concern- it's someone elses. It's someone else's job to get it running, to figure out how to get it to their servers, to make sure it's scaling and to make sure it works. A dev's job is to develop.

This is all very confusing to me. Building these two essential functions into separate silos seems foolhardy, at best. Desigining your application with no mind or consideration for *how* it is going to serve is a recipe for failure. You might get away with it for a while, but especially as things start to scale up it's going to make things damn near impossible to keep going without a rewrite. [A recent post by Parse](http://blog.parse.com/learn/how-we-moved-our-api-from-ruby-to-go-and-saved-our-sanity/) is a great example of how damaging these silos can be, and how easily they can lead to misdiagnosing problems.

Siloing has always been an issue in tech. Creating walls in which code is essentially 'tossed' over to move forward in the SLDC is asking for a hell of a lot of trouble. Silos between Dev, QA, Staging and Production can wreak havoc on any chance you'd have to ship software with any speed. The human tendency to both assign and avoid blame can and does quickly lead to everyone's famous "Us vs Them" attitudes- everyone is on different teams and it's hard to keep the big picture in mind.

![Silos](http://www.wired.com/wp-content/uploads/blogs/insights/wp-content/uploads/2013/02/silo_6601.jpg)

Finding ways to break down the walls of those silos is essential, and a great place to start is by getting developers involved in the process of deploying their code. There's always going to be some divide between Ops and Dev- people are going to have to have roles and specializations to be utilized in the most efficient manner. But getting your developers thinking hard on how the decisions they're making can affect deployment can make all the difference in the world.

Some good examples of how this can play about are presented in the Parse article (I know it's long, but it's still an interesting read). For those working on Rails, it's often easy to blame Rails for issues with speed and scalability like the article from Parse does. Hell, they even blamed Ruby as a language. But it seems to me that simple design changes could have provided a pretty big improvement in speed.

A few minutes of googling and reading identifies pretty quickly that their tools of choice for plugging into Rails were not the smartest ones. [Unicorn](https://github.com/defunkt/unicorn) and [Capistrano](https://github.com/capistrano/capistrano) for Rails deployment are known for being inefficient at scale- especially the single-threaded Unicorn which is designed for very short and heavy processing but fails miserably when dealing with processes taking any time at all. Running 24 Unicorns on each AWS machine is a great way to strangle everything that's happening- as the article says, these tools aren't great for concurrency.

A lot of the discussion around the benefits of Golang seem accurate, but the rewrite instead of trying to actually utilize better tools in Ruby and Rails seems to indicate that their teams weren't thinking together. 200 m1.xlarge instances on AWS is an enormous amount of iron and there are tools out there that can allow Rails to function at scale on even lighter hardware. Again, just a few minutes of research indicates that tools like [Phusion Passenger](https://www.phusionpassenger.com/) server, working with [Nginx](http://nginx.com/), can allow Rails to work beautifully with a great deal of concurrency, even if Ruby itself lacks the built-in, evented concurrency that Go has.

I don't mean to harsh or hate on the Parse team- the blog was fascinating and it's terrific that they're happy with their new system (and a rewrite into Golang sounds like a ton of fun!). But even as someone new in the field, reading through does nothing but remind me of this gulf that exists between those who write code, and those who get it on its production iron. As an industry, finding ways to bring those silos together and acting as a single team benefits *everyone*- devs, ops staff, and your clients. 

Being involved with my new company's processes means I get to see these decisions up close and personal. I love that I can take part in these discussions and (hopefully) contribute in a meaningful and sensible manner. It's all a beautiful and nearly frustrating reminder that tech is enormous and there's always far too much for my puny human brain to learn. I'm just fortunate enough to be in a position to struggle through and try. 