// made a function;
function generation(n ,g){

// assigned either "mother and daughter" or "father and son" to the variables parent and kid;     
let parent;
let kid;
    if (g === 'f'){
        parent = "mother";
        kid = "daughter";
    } else if (g === 'm'){
        parent = "father";
        kid = "son";
    }

/* made an object, keys are the numbers and in values I concatenated either parent or kid variable
 with my strings, or just assign it to the key without any changing based on what was needed; 
*/
let family = {
'-3': 'great grand' + parent,
'-2': 'grand' + parent,
'-1': parent,
'0' : "me",
'1' : kid,
'2' : 'grand' + kid,
'3' : 'great grand' +kid,
}

// now the function returns the value, which its key is as same as the n;
return family[n];
}

console.log(generation(2, "f"));  //➞ "granddaughter"
console.log(generation(-3, "m")); //➞ "great grandfather"
console.log(generation(1, "f")); //➞ "daughter"