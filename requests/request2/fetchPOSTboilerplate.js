//This second argument determines that this request is a POST request and what information will be sent to the API.
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
})
// The code inside .then() will execute when the promise returned from fetch() is resolved.
.then(response => {
  // When returned, this information will be passed on to the next .then() callback function.
  if(response.ok) {
    return response.json();
  }
  // This error will be raised if we get back some status error.
  throw new Error('Request failed!');
}, networkError => {
  // This error will be raised when there is a problem with the network. For instance, the network could be down or experiencing heavy traffic and can’t provide service to the user.
  console.log(networkError.message);
})
// The purpose of this step is to view the JSON that was returned from the previous .then().
.then(jsonResponse => {
  return jsonResponse
})
