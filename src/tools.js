/*

var logger = function (output) {
    console.log(output);
};
*/
//**illustrating arrow function */

var logger = (output) => {                   
    console.log(output);
}
export var appName = "ES6 Review"; 
export var dummyFunction = function () { 
    return "I am a dummy function"; }          

/* destructing */
//export const genericFunction = () => {
 //   let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
 //   let [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
 //   return `First language is ${firstLang} and the second is ${secondLang}`
  // } 

/* spread operator illustration with destructuring */
/*
  export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++']

    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
   } 
*/

   /* Default parameter  passed to function 
   export const genericFunction = (a, b) => { //genericfunction can be changed to multiolier to make more sense
    //This function multiplies any two numbers
    //if only one argument is sent as argument when function is called, b will default to 1.
    return (a * b);
   } */

   /*export const genericFunction = (...numbers) => {
    var product = 1;
    if (numbers.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
    product = product * number;
    }
    return product;
   } */

  /* export const genericFunction = (...numbers) => {
    let product = 1;
    if (numbers.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
    product = product * number;
    }
    return product;
   } */


   // small note for better understanding 
   /*
   let myCoordinates = x.map(
     (xValue) => {            
         const y = (m * xValue) + c;            
         return {'x': xValue, 'y': y}        
        }    
    ) */

   export const genericFunction = (m, c, ...x) => {            
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => {                           
    return {'x': x, 'y' : (m*x) + c};                          
    })                                                         
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '           
    for (let coordinate of coordinates){                       
    let xy = `(${coordinate.x},${coordinate.y})`               
    output+=xy;                                                
    }                                                          
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
    //coordinates.forEach((coordinate)=>{
    // let xy = `(${coordinate.x},${coordinate.y})`;
    // output+=xy;
    //})
    return output;                                             1
   }                                                            
   export class Person{                                        
    constructor(firstName, lastName, gender, height){          
    this.firstName = firstName;                              
    this.lastName = lastName;                                    
    this.gender = gender;                                      
    this.height = height;                                       
    }                                                           
};                                                             

//static methods
export class CustomMath{                                        
    static sqrt(a){                                             
        return Math.sqrt(a);                                     
    }                                                           
    static pow(a,b){                                               
        return Math.pow(a,b);                                   
    }                                                             
}                                                               

//inheritance
export class User extends Person{                              
    constructor(username, password, firstName, lastName, gender, height){             
             
        super(firstName, lastName, gender, height);                    
        
        this.username = username;                                     
        this.password = password;                                     
    }                                                                
   }                                                                        
export default logger;                                               

