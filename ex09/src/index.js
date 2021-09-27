// Only change code below this line
 const PRODUCT = (...args) => {
    
 


// Only change code above this line
   return args.reduce((a,b) => a * b, 1 );


 }

 console.log (PRODUCT(4,3,10,2));
 module.exports = PRODUCT;