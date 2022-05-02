/* This function takes one array and push each index f the array to an empty object as a key,
 and capitalize the letter to assign it as the value of that key (which has the same letter).*/


function mapping(arr){

    let obj = {};

    for (let i = 0; i < arr.length; i++){

    
        obj[arr[i]] = (arr[i]).toUpperCase();
    }

    return obj;
}
console.log(mapping(["a", "b", "c"])); //➞ { "a": "A", "b": "B", "c": "C" }