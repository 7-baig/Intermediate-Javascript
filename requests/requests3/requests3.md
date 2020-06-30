Let’s take a minute to appreciate what you’ve accomplished so far:

1 used fetch() to make GET and POST requests.
2 check the status of the responses coming back
3 catch errors that might possibly arise
4 taking successful responses and rendering it on the webpage
That is fantastic! It’s the basis of how the internet works!
In the following exercises, we’re going to take what you’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already, now it’s time to make it easier.
The structure for this request will also be slightly different. Notice the new keywords async and await, as well as the try and catch statements.
We’ll be going over how to write the boilerplate code for async GET requests in the next lesson.

**Review Requests II & III**
Let’s recap on the concepts covered in the previous exercises:
GET and POST requests can be created a variety of ways.
Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.
Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.
fetch() is a web API that can be used to create requests. fetch() will return promises.
We can chain .then() methods to handle promises returned by fetch().
The .json() method converts a returned promise to a JSON object.
async is a keyword that is used to create functions that will return promises.
await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.
await can only be used within functions declared with async.