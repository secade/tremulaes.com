---
title: Stabby Stabby
layout: post
topcolor: red
excerpt_separator: ""
excerpt: "Compared to many other OOP languages, the Ruby commands for creating class specifications, then instantiating the class into 'physical' objects is fairly straightforward and almost english-readable. A class is a general description for the possible 'shape' of an object. Trying to come up with physical, real-world analogies to every aspect of OOP is both difficult and a bit unrealistic, so I'll eschew devoting too much time on that topic and dive straight into an example on knives."
---
# Stabby Stabby
### Ruby: The Knife Manufacturer

Compared to many other OOP languages, the Ruby commands for creating class specifications, then instantiating the class into 'physical' objects is fairly straightforward and almost english-readable. A class is a general description for the possible 'shape' of an object. Trying to come up with physical, real-world analogies to every aspect of OOP is both difficult and a bit unrealistic, so I'll eschew devoting too much time on that topic and dive straight into an example on knives.

We begin with the basics: creating the class.

{% highlight ruby %}
>class Knife
>end
{% endhighlight %}

Simple enough, right? So now we have this general concept that a 'knife' could exist, but what the hell is a knife? What does it do? What is it's purpose? Without more information, this concept of knife is meaningless. Let's add some basic traits that knives can have, and we're going to add an 'initialize' method- this is what allows us to instantiate, or call into existence, a knife object.

{% highlight ruby %}
> class Knife
> def initialize(name,length,serrated)
> @name = name
> @length = length
> @serrated = serrated
> end
> end
{% endhighlight %}

You should recognize the basic form of the initialize method, and the three items in parenthesis as the parameters necessary to run the method- you'll need those whenever you create a new Knife object. Now that we have the ability to create a Knife, lets add in some other methods that they can do.

{% highlight ruby %}
> def slice
> #slice code
> end
> def dice
> #slice code
> end
> def stab
> #slice code
> end
{% endhighlight %}

Alright, now we can create a Knife and it can do a few things. By packaging those methods inside of the class, we make them available to any object that is from the class- so any Knife can slice, dice, and stab. Utilizing instance variables like @length and @serrated inside of these shared methods can provide distinctions in the way that a knife performs the method. For example, a paring knife would stab very differently from a butterfly knife, and an 8" chef's knife will work very differently from a butcher's cleaver.

The class and object system in Object Oriented Programming allows us to package code together for more efficiency in both running commands but also interacting with them afterwards. We can package similar actions together while leaving others as totally separate processes depending on needs. The knowledge of when to do this comes with practice, but as a guiding principal, I like to create separate methods if I can imagine ever needing to take that action separate from the rest at any point. With our knife example, washing the knife may be something we do after every method above- because it's accessed multiple times, it's best to write a separate method for it rather than writing it three times. Never forget DRY- don't repeat yourself.

Classes are a great way to organize your code and allow for repeatable actions across multiple data points. We used the above class to create Knife objects that share some qualities with other basic differences- this is the core of OOP. Allowing for create flexibility across a program, objects and classes allow a programmer to put information and actions into neat packages to be accessed as necessary. Ruby uses this as a fundamental part of its design, and as a Ruby developer, so should you.