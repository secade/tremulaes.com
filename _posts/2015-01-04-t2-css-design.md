---
title: Making Pixel Boxes
layout: post
excerpt_separator: ""
excerpt: "CSS spacing and positioning elements are without a doubt tricky principles. Understanding when to use padding, margin or border to make a site look exactly how you want it to is a challenge even for experienced web developers."
---
#Making Pixel Boxes
###Understanding the difference between Margins, Padding and Borders

CSS spacing and positioning elements are without a doubt tricky principles. Understanding when to use padding, margin or border to make a site look exactly how you want it to is a challenge even for experienced web developers.

It may be best to start with border. A border is a line that is drawn around the box of your element whether it is visible or not and acts as the basic containing shape of the element. It can be expanded or contracted using css to set width or height, and it can be made visible be setting border color, thickness, style, etc etc.

Margins are using to put space outside of an element and its border. This is often used when you need to space things against the main page- if you want to have something flush against an edge, you'll want to be sure to set the margin to 0 in that direction. Margins are controlled through CSS and can be handled either individually in each direction (margin-top, margin-bottom, etc), or all 4 in a single line by inputting 4 values or percentages.

Padding is a bit trickier than the earlier two; it pushes space inside of an element and its border. Padding is used to keep space between a visible border and any contained text or images, if so desired. Otherwise, content will default to a padding of 0 and be flush against the border of its containing element. Padding is often used in table formatting as many elements are used to store data in a specifc format and organization.

The best way to understanding the difference between the three is to play with them. Create sibling and parent/child relationships to see how CSS can be used to position your elements exactly where you want them.