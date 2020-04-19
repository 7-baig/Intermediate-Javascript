**Great video on Async Await**
*https://www.youtube.com/watch?v=vn3tm0quoqE*
**Great Article on Async Await**
*https://dev.to/joannatomassoni/a-beginner-s-guide-to-async-await-1a39*
***the fact of two or more events or circumstances happening or existing at the same time.***
**==========================================================================**
Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.
Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native promises which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, async...await. The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.
The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our cod
**==========================================================================**
async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:
1    If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
2    If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
3    If a promise is returned from the function, it will simply return that promise
**==========================================================================**
**Handling Independent Promises**
Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.
In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.
With our concurrent() function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, the ability to perform asynchronous actions at the same time.
Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await.
**==========================================================================**
**Await Promise.all()**
Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().
We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
In our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, the second is the value of the asyncTask2() promise, and so on.
Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.
**==========================================================================**
**REVIEW**
Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:
async...await is syntactic sugar built on native JavaScript promises and generators.
We declare an async function with the keyword async.
Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
await returns the resolved value of the awaited promise.
We can write multiple await statements to produce code that reads like synchronous code.
We use try...catch statements within our async functions for error handling.
We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
**==========================================================================**