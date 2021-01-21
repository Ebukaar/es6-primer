//

import log, { genericFunction, Person, CustomMath, User } from './tools.js';

//log(genericFunction());

import logger, { appName, dummyFunction } from './tools.js';

import fetch from 'node-fetch';
logger("Welcome! We are having fun with modularity in JS");

logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction());


//TEMPLATE LITERALS. It helps us introduce a cerain level of dynamism into our strings. It allows to be very comfortable in our string composition.


logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

//log(genericFunction(2,3,4)); //This will output 24 on the browser
try {
  // log(genericFunction(2,7)); //This will output 24 on the browser
} catch (error) {
  log(error.message); //The error message "Illegal arguments counts. Arguments must be greater than 1" will be output in browser if less than two arguments are passed. This is just for illustration, don’t pass system error messages to client in this way.
}

logger(genericFunction(2, 3, 4, 6, 8, 9, 10.5, 12));

//import log, {Person} from './tools.js';
let person1 = new Person("Ebuka", "Adigwe", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);


//person2.height = 1.7
//logger(person2.height);

log(CustomMath.sqrt(100));

let user1 = new User("Ebuks", "mypassword", "EBUKA", "ADIGWE", "Male", undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)




//Preliminary illustration of callback function in  asynchronous programming, using setTimeout()
//simple asynchronous programming using callback function
setTimeout(
  () => {
    logger('Timeout is over');
  },
  1000

)

logger('This statement is after the setTimeout call');

/**Promises  */
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timeout is over - sent by resolve. Hence caught as returned data"); //send out a success feedback with data using resolve
  }, 1000) //set timeout for 1000ms i.e. 1second.
}).then((data) => {
  logger(`ALL OK: ${data}`);//This should output "Timeout is over"
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
  logger(`Error message: ${error}`);
});
/**Async/Await */
//This has a lot to do in asynchronous synchronization 


let url = 'https://jsonplaceholder.typicode.com/users/1'; // Get data for user with id 1
fetch(url)
  .then(response => response.json()) //covert data to json
  .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email} `))
  .catch(error => logger(`Error: ${error}`));


  let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());
  let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json());
  let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json());
  Promise.all([fetch1, fetch2, fetch3])//get the data for the three calls in an array.
      .then((data) => {
          logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
      });



/** Async/Await */
//first define your promise aware function
const promiseAwareTimeout = (milliseconds = 1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
      }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
  });
}

//define a function that uses our Promise executor
const usePromiseAwareTimeout = async (milliseconds) => {
  logger('About to call timeout');
  try {
      logger(await promiseAwareTimeout(milliseconds));
  } catch (error) {
      logger(error);
  }
};

//call the async function. 
usePromiseAwareTimeout(3000);

usePromiseAwareTimeout();


/**More illustration of async/await */
/**Need to use try/catch to ensure that error is handled in async/await */
const usersUrl = 'https://jsonplaceholder.typicode.com/users/';

const getUserById = async (userId = 1) => {

  let url = usersUrl + userId;

  try {
      const response = await fetch(url);
      const data = await response.json();
      /*
      The if statement below is to ensure that errors like URL not found (ie Error 404) is caught. fetch() unfortunately does not send a Promise.reject() in such a case.
      So here, we are throwing exception if HTTP response status is
      outside the OK range (the 2xx range are OK), so that it can be caught.
      */
      if (response.status >= 200 && response.status < 300) {
          logger(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it
      } else {
          throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
      }
  } catch (error) {
      logger(`Error: ${error}`);
  }
}

getUserById(2);

getUserById();

/** You can also use promise to call your async functions */
//lets do Promise.all
Promise.all([getUserById(0), getUserById(2), getUserById(3)]) //getUserById() is deliberately passed Id of 0 in the first case to provoke Error: 404.
  .then((data) => {
      logger(`User1 = ${!data[0] ? 'Error' : data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
  })

  //array map illustrations
  const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"]; //array with elements.
addressees.map(addressee => {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your admission letter is ready for collection`;
    logger(message);
});


