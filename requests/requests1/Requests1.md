**HTTP Requests**
One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language.
Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site’s code is written so that users don’t have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered first and then the image can load in the background.
JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.
Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.
To read more about the event loop, read the MDN documentation:
***MDN Documentation: Event Loop***
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop*
**==========================================================================**
To get a glimpse of how the event loop works, take a look at the code below.
We’ll be using setTimeout(), which will pass a function call to the queue. The first argument is a callback and the second argument is the number of milliseconds the program must wait before the callback can be run.
The other console.log() calls are run from the stack.
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');
**==========================================================================**

**XHR GET REQUEST 1**
Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.
***MDN Documentation: Extensible Markup Language (XML).***
Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.
Remember, we use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an XHR GET request.


**REVIEW REQUESTS I**
1   JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript’s asynchronous capabilities.
2  There are many HTTP request methods, two of which are GET and POST.
3   GET requests only request information from other sources.
4   POST methods can introduce new information to other sources in addition to requesting it.
5   GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.
6   POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.
7   Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.
8   To add a query string to a URL endpoint you can use ? and include a parameter.
9   To provide additional parameters, use & and then include a key-value pair, joined by =.
10   Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you’re working.
*Play around with the browser and code to make GET and POST requests. If you’re going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!*
***If you want to challenge yourself:***
Build shortenUrl() or getSuggestions() from scratch.
Manipulate the object that is returned to display something different in the browser.
Use a different API to make a GET or POST request.
Create query strings to yield different results.
