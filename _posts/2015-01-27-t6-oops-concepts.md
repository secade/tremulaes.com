---
title: OOPs I did it again
layout: post
excerpt_separator: ""
excerpt: "Disclaimer: I'm aware that my blog title is a Britney Spears reference, and I apologize."
---
# OOPs I did it again
### Scope in Ruby and How it Should Affect You

Disclaimer: I'm aware that my blog title is a Britney Spears reference, and I apologize.

Based off of an understanding of parenthood entirely derived from American television, one of the first things that people who just found out they will be parents do is to babyproof their home. They spend time and money ensuring that their new baby will not be able to make regular playtoys out of things like knives, guns, or live electrical wires. As a developer, you should be doing the same thing with your code.

Just how you wouldn't want your toddler chewing on batteries, you want to ensure that all of your data is properly scoped throughout your project- ie, access is tightly controlled. Access to a variable is something that should never be granted ad nauseum but instead through a purposeful decision process to accomplish a specific task. Rather than giving your baby access to anything and restricting a set of things, you'd likely want to limit everything and give access to a specific set.

In Ruby, variables come in 5 different scopes. We'll start from the most limited and narrow scope and move our way up- I choose this order because that is also how a developer should make their choices. Always think about what is the most limited scope that you can manage this in while still accomplishing your task.

#### local

Local variables exist only in their local environments which will likely be narrowed down to the current method they're in. Local variables have short life spans and may be handled or manipulated hundreds or thousands of times over the course of iterations or processing. Local variables stop existing the moment their environment expires and therefore lack any sort of persistance.

Why use such impermanent variables?, you ask? It's simple. Over the course of a program, you may be handling thousands of variables- could you imagine making thousands of different names for every freaking variable you use? Iterators in ruby often use 'i' as an iterative local variable, such as below:

{% highlight ruby %}
> array.each { |i| puts i }
{% endhighlight %}

Here, 'i' is the quintessential local variable that only exists for the life of the code block, encased in {} curly braces, and expiring the moment we move past that block. It's a small life, for certain, but these sorts of local variables are the bread and butter of any programming language- quickly accessible with highly reusable names. When I see 'i', in my code, even if it's 20 times in a single class, I know what that 'i' is doing.

#### @instance

Just beyond local, we have our lovely instance variables. Marked by a leading @ sign, instance variables in Ruby allow for some persistance of data that helps to shape an instance of a class, also known as an object. They are still malleable and robust, but they are accessible to any method within the instance, and if attr_accessor is set, they're even accessible OUTSIDE of their own existance! By instantiating an object (instance of a class), we bring into life any instance variables that come along with that class for clean and straightforward manipulation.

One important thing to remember is that each inidividual instance of a class has it's own value for instance variables. If I check the age of my car versus my neighbor's car, I'd feel terrible to discover that mine is 12 years older, but what's important is that the @age of each car is different even though they're both Hyundai Sonatas. Also my neighbor's car runs.

#### @@class

Class variables, marked by TWO leading @s for a @@ in front, are variables that exist and are accessible to ALL members of a class. These variables hold permanance outside of individual instantiations and instead are able to be manipulated by any member of their class. These are used far less than instance variables, but can come in handy when you need to track something innate to an object but larger in scope than the individual objects themselves.

#### $global

Global variables are accesible anywhere, anytime. Preceded by the misleading $, These filthy beasts are like statues in a public park that anyone can go up and touch- any method, any class, any scope can interact with these individual global variables to create or alter them as they see fit.

Global variables are rare due to their high level of access. If any part of a program depends on certain types or forms of data, global variables can be highly problematic since anyone anywhere can change them. The use of them is strongly discouraged in practice.

#### CONSTANT

Easily noticeable by their all-caps names, CONSTANT variables are similar to the $global variable discussed a moment ago. Constants can be used to store permanent, static data that isn't intended to ever be altered throughout the life of a program. They're accessible to any scope just like a $global but are intended to be used only as permanent fixtures without alteration. They can be simple or complex based off of what they're set to, but be sure to always use all-caps: Ruby checks this!

#### $@$@$@$@4DSFJSDOFSDFsdfmsdmf

Learning how to use which variable when is a terribly important part of learning how to program well. Although simple programs can run away with terrible practice (for example, using many global variables), more complex applications will require proper understanding of variable scope. Remember to always default to the smallest scope possible and you're on the right track. After all, who would want their baby chewing on a _____ ?