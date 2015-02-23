---
title: Cartography
layout: post
topcolor: red
excerpt_separator: ""
excerpt: "Imagine a factory assembly line. Picture yourself standing on the floor at a particular spot in the process as the machines and people around you work their magic to produce, say, a can of soup. You're standing at the place where the cans, starting off as sheets of metal, are cut, stamped, then twisted into the shape of the infamous Campbell's Soup. Right in front of you, arms of machine's whirl as the metal transforms from a cold, alien sheet to the comfortable image of a can."
---
# Cartography
### Understanding the Ruby #map

Imagine a factory assembly line. Picture yourself standing on the floor at a particular spot in the process as the machines and people around you work their magic to produce, say, a can of soup. You're standing at the place where the cans, starting off as sheets of metal, are cut, stamped, then twisted into the shape of the infamous Campbell's Soup. Right in front of you, arms of machine's whirl as the metal transforms from a cold, alien sheet to the comfortable image of a can.

A method is like the factory, taking in different materials and (often) returning a product of some sort. Just as a factory can be divided up into many sections, methods often involve the use of many other methods, calling upon them to transform stock into beauty. They're combined by developers and software engineers to produce a specific process that will later plug into a bigger picture.

But we're just concerned with an specific part of the process- we'll examine the Ruby #map method.

The #map method is known as an enumerable, a special kind of iterator that runs through every element of a collection (in Ruby, generally hashes and arrays) and perform method, or a block of code, upon each element in turn. Just like the assembly line, each element, or member of the collection, will pass through and find itself processed by the block.

Let's begin with an array with 5 pieces, or elements. Lets call this array an_array and give it boring values.

{% highlight ruby %}
> an_array = [1,2,3,4,5]
{% endhighlight %}

This is a bit boring, so I'm going to call #map on an_array:

{% highlight ruby %}
> an_array.map { |i| i + 1 } 
=> [2,3,4,5,6]
{% endhighlight %}

It should be easy to see the relationship between the array we started with ([1,2,3,4,5] if you forgot!) and what we ended up with ([2,3,4,5,6]); instead of 1, we now have 2, and instead of 4, we now have 5. Each number went up by 1, just like we see in the code to the right of #map, surrounded by {} curly braces.

The |i| portion is setting our 'instance variable', or variable that exists only while this #map method is running. Past the |i|, we have the guts of the map method- the code to run! Here we see 'i + 1' which is exactly what map did- it added one to every element in the array! It is able to do this by running every element in the array, in order, through the code to the right of |i|, then it returns the value of each of those in the same order. Another example:

{% highlight ruby %}
> array2 = [2,4,6,8,10]
> array2.map { |i| i / 2 }
=> [1,2,3,4,5]
{% endhighlight %}

Once again, we can see the affect of the map- it divided every element in array2 by 2, just like the code tells it to do inside the curly braces (which is known as a 'block' of code). Map then returns a new array with all of the transformed values, but the original array remains the exact same.

{% highlight ruby %}
> p array2
=> [2,4,6,8,10]
{% endhighlight %}

The changes that we made aren't there anymore; #map doesn't actually alter its array at all. It copies the array exactly into a new, unnamed variable and performs all its work on that, then returns the values. If we immediately act on the return, we can use the new values, but if we don't use them right away or store them into a variable of our own, the effects of map are essentially lost.

But what if I want to change my array permanently? That's easy enough.

#map has a twin method known as #map!, pronounced map BANG (yes that is real). The exclamation point means that map becomes destructive, a term that indicates it will permanently alter whatever it is called on. Let's take a look!

{% highlight ruby %}
> array_tres = [1,2,3,4]
> array_tres.map! { |i| i * i }
=> [1,4,9,16]
> p array_tres
=> [1,4,9,16]
{% endhighlight %}

Asking for the values of array_tres after the destructive map! proves that array_tres is now equal to the output of the map method, permanently storing it while the older values are lost forever. Depending on circumstance, you may find yourself needing one or the other, but they both serve important purposes in Ruby.

Just like a factory, a method is constructed of individual portions and motions. You may find yourself in need of running each element of your collection through an assembly line individually, and enumerables are the methods you're going to want. Whether you want the change to be permanent (destructive) or not (nondestructive), the #map method is your friend to transfrom your collection into something new and more useful to you. Give it a whirl, and soon you'll be a cartographer yourself.