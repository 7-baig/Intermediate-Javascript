// //=======================================================>
// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344
// };

// // Write your code below:
// const myExecutor = (resolve, reject) => {
//   if(inventory.sunglasses > 0) {
//     resolve('Sunglasses order processed.')
//   }
//   else {
//     reject('That item is sold out.')
//   }
// };
// const orderSunglasses = () => {
//   return new Promise(myExecutor)
// };
// const orderPromise = orderSunglasses();

// console.log(orderPromise);
// //=======================================================>
// console.log("This is the first line of code in app.js.");
// const usingSTO = () => {
//   console.log('hello friend');
// }
// setTimeout(usingSTO, 3000);
// console.log("This is the last line of code in app.js.");
// //=======================================================>
// const prom = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   if(randomNumber >= 5) {
//     resolve('yes it worked!')
//   }  
//   else {
//     reject("it didn't worked!")
//   }
// });
// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue)
// };
// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason)
// };
// prom.then(handleSuccess, handleFailure);
// //=======================================================>
// // ** CHAINING MULTIPLE PROMISES ** //
// const {checkInventory, processPayment, shipOrder} = require('./app.js');
// const order = {
//   items: [['sunglasses', 1], ['bags', 2]],
//   giftcardBalance: 79.82
// };
// checkInventory(order)
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//    return processPayment(resolvedValueArray);
// })
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//   return shipOrder(resolvedValueArray)
// })
// .then((successMessage) => {
//   console.log(successMessage);
// })
// .catch((errorMessage) => {
//   console.log(errorMessage);
// });
// // =======================================================>
// let p = new Promise((resolve, reject) => {
//   let a = Math.floor(Math.random() * 10);
//   a <= 5  ? resolve('Success') : reject('Failure');
// })
// p
// .then((message) => {
//   console.log(`This is a ${message}`);
// })
// .catch((message) => {
//   console.log(`This is a ${message}`); 
// })
// =======================================================>
const resolveAfterXSeconds = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
};
resolveAfterXSeconds(2000)
.then((ms) => {
  console.log(`it took ${ms} milliseconds`)
})












