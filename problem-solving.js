function cubeNumber(number){
    if(typeof number !== "number"){
        return "Please Enter a Number";
    }
    else{
        const cube = Math.pow(number,3);
        return cube;
    }
}

function matchFinder(string1, string2) {
    if(typeof string1!=="string" && typeof string2!=="string"){
        console.log("Please Enter String")
    }
    else if( string1.includes(string2) === true){
        return true;
    }
    else{
        return false;
    }
}


function sortMaker(arr) {
    const temp = arr[0]
    for (let i=0;i<arr.length;i++){
        if(arr[i] < 0){
            return "Invalid Input"
        }
    }
    if(arr[0] < arr[1]){
        arr[0] = arr[1]
        arr[1] = temp
        return arr
    }
    else{
        return 'equal'
    }
}

function findAddress(obj) {
    if (Object.hasOwn(obj,"street") === true && Object.hasOwn(obj,"house") === true && Object.hasOwn(obj,"society") === true){
        return obj.street + "," + obj.house + "," + obj.society;
    }
    else if (Object.hasOwn(obj,"street") === true && Object.hasOwn(obj,"house") === false && Object.hasOwn(obj,"society") === true){
        return obj.street + "," + '__' + "," + obj.society;
    }
    else if (Object.hasOwn(obj,"street") === true && Object.hasOwn(obj,"house") === false && Object.hasOwn(obj,"society") === false){
        return obj.street + "," + '__' + "," + '__';
    }
}

function canPay(changeArray, totalDue) {
    if(changeArray.length<=0){
        return "Empty array not allowed"
    }
    else{
        let sum = 0;
        for(let i = 0;i<changeArray.length;i++){
            sum = sum+changeArray[i];
        }
        if (sum >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}


 