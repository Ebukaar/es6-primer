//

import log, {genericFunction, Person, CustomMath, User} from './tools.js';

//log(genericFunction());

import logger, {appName, dummyFunction } from './tools.js';

logger("Welcome! We are having fun with modularity in JS");

logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );


//TEMPLATE LITERALS. It helps us introduce a cerain level of dynamism into our strings. It allows to be very comfortable in our string composition.


logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);
 
//log(genericFunction(2,3,4)); //This will output 24 on the browser
try{
   // log(genericFunction(2,7)); //This will output 24 on the browser
   }catch(error){
    log(error.message); //The error message "Illegal arguments counts. Arguments must be greater than 1" will be output in browser if less than two arguments are passed. This is just for illustration, don’t pass system error messages to client in this way.
   } 

 logger(genericFunction(2,3,4,6,8,9,10.5,12));

 //import log, {Person} from './tools.js';
let person1 = new Person("Ebuka", "Adigwe", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`); 


//person2.height = 1.7
//logger(person2.height);

log(CustomMath.sqrt(100)); 

let user1 = new User("Ebuks","mypassword","EBUKA","ADIGWE","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)


/**Promises  */

/**Async/Await */
//This has a lot to do in asynchronious synchronization 













