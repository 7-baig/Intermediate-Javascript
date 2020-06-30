// Information to reach API
const apiKey = 'f9744e6602614fd79aeb023686d09c81';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  // The reason for creating data is to prepare the information needed to send in the body.
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-type': 'application/json',
    'apikey': 'f9744e6602614fd79aeb023686d09c81',
    },
    body: data
  })
  // The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status.
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('Request failed!');
  }, networkError => {
      console.log(networkError.message);
  }).then(jsonResponse => {
    renderResponse(jsonResponse)
  })
  
  
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
