// // using promises
// function withConstructor(num){
//     return new Promise((resolve, reject) => {
//       if (num === 0){
//         resolve('zero');
//       } else {
//         resolve('not zero');
//       }
//     })
//   }
//   withConstructor(0)
//     .then((resolveValue) => {
//     console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
//   })
//   // using Async
//   async function withAsync(num) {
//       if (num === 0){
//         return 'zero'
//       } else {
//         return 'not zero'
//       }
//     }  
//   withAsync(100)
//     .then((resolveValue) => {
//     console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
//   })
// //========================================================================>
// /*
// this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
// */
// const brainstormDinner = () => {
//   return new Promise((resolve, reject) => {
//   console.log(`I have to decide what's for dinner...`)
//   setTimeout(() => { 
//     console.log('Should I make salad...?')
//     setTimeout(() => {
//       console.log('Should I make ramen...?')
//       setTimeout(() => {
//         console.log('Should I make eggs...?')
//         setTimeout(() => {
//           console.log('Should I make chicken...?')
//           resolve('beans')
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// })
// };
// async function announceDinner() {
//   let meal = await brainstormDinner();
//   console.log(`I'm going to make ${meal} for dinner.`);
// }
// announceDinner()
// // ==================================================================================================>
// /*
// This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
// */
// const shopForBeans = () => {
//   return new Promise((resolve, reject) => {
// 	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//   setTimeout(()=>{
//     let randomIndex = Math.floor(Math.random() * 5)
//     let beanType = beanTypes[randomIndex];
//     console.log(`2. I bought ${beanType} beans because they were on sale.`)
//    resolve(beanType);
//   }, 1000)
// })
// };
// async function getBeans() {
//   console.log(`1. Heading to the store to buy beans...`);
//   let value = await shopForBeans();
//   console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
// }
// getBeans();
// ==================================================================================================>
// const resolveAfterXSeconds = (ms) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(ms)
//     }, ms)
//   })
// };

// const n = async () => {
//   let first = await resolveAfterXSeconds(1000);
//   let second = await resolveAfterXSeconds(1000);
//   console.log(first)
//   console.log(second)
// };
// n();
// ==================================================================================================>
async function makeCall() {
  try {
     const response = await axios.get('https://randomuser.me/api');
     console.log(response.data);
  } catch(error) {
     console.log(error);
  }
};

// ==================================================================================================>
async function makeThreeCalls() {
  const [ firstCall, secondCall, thirdCall ] = Promise.all([
      await axios.get('https://someurl.com'), 
      await axios.get('https://anotherurl.com'),
      await axios.get('https://yetanotherurl.com')
  ]);
  console.log(`${firstCall}, ${secondCall}, ${thirdCall}`)
};
// ==================================================================================================>
// promises version
function nativePromiseVersion() {
  returnsFirstPromise()
  .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
  })
 .then((secondValue) => {
      console.log(secondValue);
  });
}
// ==================================================================================================>
// async await version
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
// ==================================================================================================>
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.')
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`)
      resolve(true)
      }, 1000)
  })
}
let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.')
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!') 
        resolve('\n\nDinner is served!')
      }
    }, 1000)
  })
}
//==>
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
//=================================================================================================>
//This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5 ){
    return true;
  } else {
    return false;
  }
};
//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  })
};
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`)
  }
  catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
};
hostDinnerParty();
//=========================================================================================>
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}
async function serveDinner() {
  // therse variables are assigned the promise objects themselves not their resolved values.
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  // log the resolved values.
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
};
serveDinner();
//=========================================================================================>
// AWAIT PROMISE.ALL() //
async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  let vegetable = foodArray[0];
  let starch =  foodArray[1];
  let protein =  foodArray[2];
  let side =  foodArray[3];
  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
};
serveDinnerAgain();
//=========================================================================================>
  