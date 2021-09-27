 var numArray = [];
 var i 
 for (i = 0; i<3 ; i++) {
     numArray.push(1);

 } 
 console.log (numArray);
 console.log(i);

 function checkVariableScope (){
   `use strict`;
      
   // Only change code below this line

  let i = `function variable`;

// Only change code above this line

if (true) {
    
    // Only change code below this line

    let i = `block variable`;

// Only change code above this line

    console.log (`Scope i is:  ` , i);

}
console.log (`Scope i is `, i);
return i;

 }
 checkVariableScope();

 module.exports = checkVariableScope;

 console.log ();