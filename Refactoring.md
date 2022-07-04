# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
 first I removed some redundant code and made the function more readable by embracing the principle of DRY and KISS.

 I used the following steps to refactor the function:

  1. Started by writing test suits and ensured it has 100% coverage before refactoring so as to avoid breaking the existing functionality.
  2. Then I Created individual utility functions for each of the steps which also made writing test very easy and maintainable as well.
  3. Created a function to determine the partition key based on the number of digits in the number.
  4. Used optional chaining "?" to guard against invalid event partitionkey which has the potential of breaking the code, using optional chaining short-circuits with a return value of undefined if partitionkey is not found.
  5. Used the ternary operator to return the correct partition key based on certain conditions.
