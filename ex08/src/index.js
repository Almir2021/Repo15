// Only change code below this line
const SUM = (num1,num2) => {
    if (num2 == undefined) {
        return num1 +=1;
    } 
      
    else {
        return num1 + num2;
    }

    
}


// Only change code above this line

console.log (SUM(3,));

module.exports = SUM;