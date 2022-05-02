let getBudgets = ([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
    ]); // ➞ 65700



// this function accesses to the value of the key "budget" through a for loop and returns sum of them.   
function sumOfBudgets(funcObj){
    let sum = 0;
   for (let i = 0; i < funcObj.length; i++){
    sum += funcObj[i].budget;
   }
   return sum;
}    
console.log(sumOfBudgets(getBudgets));  // ➞ 65700