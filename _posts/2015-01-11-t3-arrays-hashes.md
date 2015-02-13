---
title: Hashercize
layout: post
excerpt_separator: ""
excerpt: "One of the biggest struggles that I’ve had in moving over to Ruby has been trying to grasp the concept of a Hash- what are they for? What is their purpose? How are they used in production? It’s been a real challenge to wrap my mind around why you would ever choose a Hash over an array, so I’ve had to do some considerable reading to better grasp what they do the same, and what they do differently."
---
# Hashercize
### Arrays and Hashes, What the Heck they be?

One of the biggest struggles that I’ve had in moving over to Ruby has been trying to grasp the concept of a Hash- what are they for? What is their purpose? How are they used in production? It’s been a real challenge to wrap my mind around why you would ever choose a Hash over an array, so I’ve had to do some considerable reading to better grasp what they do the same, and what they do differently.

#### Similarities

First and most importantly, in Ruby both a Hash and an Array are objections (as is pretty much everything in Ruby). They both contain items within them that can scale to be quite enormous- there’s no defined limit on how many elements an Array or a Hash can contain. Ruby contains native methods that can be used on both:

Array#each and Hash#each both allow for iteration through each object
Array#inject and Hash#each are enumerables that iterate and produce a product depending on the block code written after.
I’m sure there are many more methods to be used, but overall, they share very similar syntax. Both classes can have their elements called using square brackets, and both can be used to pass data through methods or transformations of nearly any kind.

#### Differences

The differences were subtle to me but are slowly becoming more poignant. I had originally imagined a Hash as just an array that natively has two dimensions, but the relationship isn’t quite the same at all.

Arrays in ruby can contain elements of any data type, including other arrays which allows for multidimensional arrays to exist. Iterating through these in languages like Java can be extremely complex, even when you’re trying to do something as simple as populating a table. To an array, order of the elements is often viewed as essential and changing the order or size of an array can have a serious impact on any dependent code.

To a Hash, order is essentially meaningless. What matters to a hash is that the key (essentially the first number) is tied to the value (second number). Since Hashes can be initialized with strings as the key, the order quickly becomes irrelevant- a dynamically produced array will innately serialize the data via the index, but all that matters to getting the Hash’s values is the key.

Parsing through large amounts of data often involves utilizing the two in combination with each other. For example, if you had to import a table with 4 columns, it would be easy to convert each column into a hash where each column is a key, and each cell a value. Then you through each hash into an array which will allow for easy manipulation later on.

It’s still hard to say exactly when you would use one over the other, at least for me. With more practice and familiarity, the true and significant differences between the two will become clearer. In the meantime, playing with them is certain to yield some interesting results!