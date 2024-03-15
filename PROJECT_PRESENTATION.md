# String permutations

## The project

The project I ended up creating takes an input string of up to 4 letters and should return every unique solution to them (ie there are 6 unique solutions to 'abc' but only 3 for 'abb').

## The process

> Ideation stage:
> As my first step I compiled a list of ideas for the project. Some of these included a maze through a matrix (which would have made for a lovely plot line) a sudoku game, an anagram grouper, a cycle notation permutation composition calculator, and a string permutation calculator.
> Realist stage:
> I initially thought something with numbers might be easier to write tests for however my favourite of the above ideas (the permutation composition calculator) seemed a little beyond my capabilities in the given time frame. Although I know how to calculate these, and I believe I could write a program to do it, within the time frame I preffered to focus on something simpler and chose the string permutation calculator.
> Critic stage:
> I fleshed out some basic tests for one or two string inputs and everything seemed pretty doable. One issue I encountered was in the logic of removing duplicates from the returned array. However, I found the set object that removes duplicates and with some help from chatGPT I was able to implement this in my code to solve the project. This step was added just to create an extra level of difficulty for the user as calculating the factorial of the input string seemed a little too easy (my critic said).

## MVPs

> MVP 1
> MVP 1 involved setting up the basic tests and writing a writing a function that was able to output an array of the permutations but without accounting for the occurance of repeating characters in the string.
> MVP 2
> MVP 2 involved implementing the requisit that repeating permutations should not be accounted for. Also writing more complex tests to check for possible variations of characters in the string.
> MVP 3
> MVP 3 involved pushing the final project to codewars as I recently became a proud member of the plus 300 kata club. I however did not get round to completing this step.

## Issues encountered

I did not work from the story backwards but rather forwards from the problem and I'm unsure if this is detrimental to the common process of concocting a kata. Thinking in terms of TDD was challenging as it is very tempting to create the function first and then create tests tailored to it afterwards.

## Positive takeaways

The group this week was fantastic. James brought a lot of technical knowledge and was very patient in helping the rest of us. Everyone was a good team player and took others opinions on board and everyone had a chance to contribute to the different projects.
