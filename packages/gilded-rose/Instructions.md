Summary
The reality of software development is that writing new code generally only takes up a small amount of time. A much larger amount of time is spent adding features to existing code, be it your own or someone else's.

This means that an incredibly valuable skill is being able to enter a totally unknown area of code, however poorly-maintained it might be, and quickly reach a state where you can understand it, work with it and extend it.

This is a refactoring kata. The starting point is working but untested code, a new feature requirement, and some constraints. It's your job to implement the new feature as cleanly as possible without breaking the existing code. Our preferred approach to this is to cover the relevant areas of logic with tests (otherwise, you don't know what you're breaking), refactor the code so that it can accept the new feature, then add the feature in a test-driven manner.

As an extra constraint, ask yourself: how can you refactor as little as possible whilst still safely and reliably implementing the new feature? In the real world, this would translate to keeping costs down, so it can be a useful exercise. (In a large codebase you could spend months refactoring, but if it doesn't deliver any value and isn't likely to in the near future, it may not be worthwhile.)

Instructions
The instructions from the original repository are as follows:

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

- All items have a SellIn value which denotes the number of days we have

to sell the item

- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold and never decreases
in Quality

- "Backstage passes", like aged brie, increases in Quality as it's SellIn
value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

To get started, clone the code. The original repository for this Kata (in C#) can be found on NotMyself's GitHub. For programmers in other languages, Emily Bache has a repository with the starting code in many different programming languages. The latter repository's README also contains a useful explanation of Golden Master testing.

Useful Links
Books
Working Effectively with Legacy Code by Michael Feathers
Articles
Characterisation Testing by Michael Feathers
Testing legacy code with Golden Master by Sandro Mancuso
Why most solutions to Gilded Rose miss the bigger picture by Bobby Johnson
Solutions
C# by Nick White and Scott Edwards (note that this solution does not follow the "avoid modifying the Item class" constraint)
Java by Sandro Mancuso
