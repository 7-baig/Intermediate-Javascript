// XHR GET REQUEST
// boilerplate code for an AJAX request. //

// // The XMLHttpRequest object is used in JavaScript to create and send requests. 
// const xhr = new XMLHttpRequest;
// const url = 'https://api-to-call.com/endpoint';
// // // JSON is JavaScript Object Notation, which is how the response is going to be formatted.
// xhr.responseType = 'json';
// // // The .onreadystatechange of xhr will contain an event listener which will execute when the readyState property changes. 
// xhr.onreadystatechange = () => {
// //   // The purpose of this conditional statement checks to see if the request has finished.
//   if (xhr.readyState === XMLHttpRequest.DONE) {
// //     // This response will contain the data that we’re getting back from the request.
//     return xhr.response;
//   }
// };
// // // .open() creates a new request and the arguments passed in determine the type and URL of the request.
// xhr.open('GET', url);
// xhr.send();
// // I’ve written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.
// ======================================================================================>
// ======================================================================================>
// ======================================================================================>
// ======================================================================================>
// //Create the XHR Object
// let xhr = new XMLHttpRequest;
// //Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', 'https://api.github.com/users', true)
// //call the onload 
// xhr.onload = function() {
//         //check if the status is 200(means everything is okay)
//         if (this.status === 200) {
//             let div = document.getElementById('users');
//                 //return server response as an object with JSON.parse
//                 const serverResponse =  JSON.parse(this.responseText)
//                 // console.log(JSON.parse(this.responseText));
//                 // console.log(serverResponse);
//                 const user = [];
//                 serverResponse.forEach(element => {
//                     user.push(`user: ${element.login} repo: ${element.repos_url}`)
//                 });
//                 console.log(user);

//                 for(let i = 0; i < user.length; i++) {
//                     var node = document.createElement("LI");                 
//                     node.classList.add('list')
//                     var textnode = document.createTextNode(user[i]);         
//                     node.appendChild(textnode);                              
//                     document.getElementById("users").appendChild(node);    
//                 };
//     }; // if end
// }; // function end
// //call send
// xhr.send();
// //Common Types of HTTP Statuses
// // 200: OK
// // 404: ERROR
// // 403: FORBIDDEN
// ======================================================================================>
// ======================================================================================>
// ======================================================================================>
// ======================================================================================>






















