/* Here are some key points to keep in mind as we walk through the code:
Using an async function that will return a promise.
await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run. */


// The async keyword will ensure that the function returns a promise.
const getData = async () => {
// The code in the try block will send a request and handle the response. The catch statement will then take care of an error if it is thrown.
try {
    // We’ll have to save the returned promise in a variable called response using the const keyword. response will save the the response of endpoint once that information has been sent back.
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok) {
    // Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what data the JSON holds.
    const jsonResponse = await response.json();
    return jsonResponse
    }
    throw new Error('Request failed!')
}
catch(error) {
    console.log(error);
}
}