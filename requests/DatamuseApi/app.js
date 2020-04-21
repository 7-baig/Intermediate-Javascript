// Information to reach API
// URL to direct your request.
const url = 'https://api.datamuse.com/words?';
// 'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  const xhr = new XMLHttpRequest; 
  // When data is sent back, it will be in JSON format.
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
    }
  }
  // This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
  xhr.open('GET', endpoint);
  // The .send() method will send the request to the server.
  xhr.send();
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
