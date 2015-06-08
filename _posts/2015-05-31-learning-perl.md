---
title: "Learning Perl"
layout: post
topcolor: red
excerpt_separator: ""
excerpt: "Ruby has spoiled me.

Dynamically typed, variable syntax, everything-is-an-object, learning Ruby was a joy and the challenges of my time as a Ruby initiate were most often CS struggles rather than fighting with the language itself. Even just a few weeks into the language meant that I could sit down and spin out terrible code that did some pretty cool things, like with my project [Gemfarm](/portfolio/gemfarm/). Ruby does so much for you and abstracts over so many things that I never had to really understand what was happening underneath."
---

# Learning Perl
## First Steps into a new language

Ruby has spoiled me.

Dynamically typed, variable syntax, everything-is-an-object, learning Ruby was a joy and the challenges of my time as a Ruby initiate were most often CS struggles rather than fighting with the language itself. Even just a few weeks into the language meant that I could sit down and spin out terrible code that did some pretty cool things, like with my project [Gemfarm](/portfolio/gemfarm/). Ruby does so much for you and abstracts over so many things that I never had to really understand what was happening underneath.

The longer I spend as a developer, the less true that becomes. Sharpening my JavaScript skills began to push some of that ignorance into the light, and I was forced to adjust. Recently, for work, I've started playing with one of Ruby's grandparents, Perl- and oh buddy, it's occasionally a bit silly.

Thankfully, Ruby and Perl share a great deal. A great deal of the syntax is mutually understandable and Perl's primitive datatypes are a lot more reasonable than I would have originally expected. Perl's lists and anonymous arrays/hashes aren't too dissimilar from Ruby's own, and accessing them works in a pretty similar manner.

Then things get a little unpleasant.

#### Libraries

Ruby gems are a beautiful library system. With bundler and rbenv, I can manage pretty wildly different projects with heavily differing version dependencies, all on the same machine and even sitting next to each other in the same folder, all with ease. A few lines into a Gemfile and a properly setup rbenv means I can spin up my Ruby projects within minutes and that oftentimes the setup process is nearly identical across projects. Aaaaand everything is free, for the most part.

Perl? I still barely understand CPAN. Accessing the remote repos, installing individual dependencies all for the purpose of getting a single damn project to run has been unpleasant, at best. I have little to no understanding of how package management works in Perl and can really only find examples of paid for products. Getting a Perl Catalyst system working on my system has been almost a nightmare, and documentation is sorely lacking, especially compared to ruby's beautifucal docs.

#### OO??

My only real understanding of OO at this point is Ruby's sole interpretation of Object-Oriented programming and design, and it's been a gentle path to knowledge. Ruby is forgiving and there are some really terrific books out in the world that have helped me a great deal.

Perl's OO capabilities seem like they were simply tacked on years after the language was already made, which I understand is pretty much exactly how it happened. The concept of "blessing" and managing objects is confusing as hell to someone coming from a much more native OO language, so it seems that Perl is mostly intended to be a procedural language, which thankfully is how the Perl codebases I'll be working with are designed.

#### TIMTOWTDI

There is more than one way to do it.

Ruby carries this philosophy deep into its core, which is terrific. I love that languages allow for personal programmer's styles and personalities to show a little bit more in their code without simply just following a very long and strict list of precepts that can never be broken.

But it can lead to problems. [Mike Danko](https://twitter.com/mikedanko) recently gave a talk on the dangers of being clever at the [Columbus Ruby brigade](http://columbusrb.com/). TIMTOWTDI opens up a great deal of room for people to find clever, unreadable and oftentimes unmanageable code solutions that clog up codebases and create enormous amounts of technical debt. Legacy code can be cluttered beyond recognition, full of years-old clever workarounds for problems that may no longer be relevant or exist.

#### General Whining

I enjoy learning new things, and Perl is no exception. It's been a joy to dive into a new language and stretch my very limited understanding of programming. Compared to a lot of other languages, Perl is a pretty easy next step- it shares so much in common with Ruby that it's a fairly small step to get over into Perl country from Ruby land. Especially compared to some heavier stuff like Clojure, Go, C++ or even C, learning Perl is a breeze.

Mostly, I'm just excited about the opportunity to even have these thoughts or complaints. I like that I'm building analytical tools to compare these different languages and that I can begin to flex my 'polyglot' muscles. Being stretched is fun, and I enjoy the process of being pushed.

The above comparisons are little more than my ignorant and sophomoric attempts to have an intelligent discussion about something very new to me. I hope that at the very least you found some of it amusing.