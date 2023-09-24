// If i compare a number with a same type string and i use (==) then it will match the result will be true
function compare(a, b) {
    if (a == b) {

        return true;
    } else {
        return false;
    }
}

// === will solve the problem. It will return true only when the data type will be same 

function compare(a, b) {

    if (a === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare('25', 25);
   console.log(result);
