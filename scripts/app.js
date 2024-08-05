// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


// we will need an empty array to store our results in
// we'll use a for loop to iterate thru, we will want to start at index of 1 insted of 0
// we will need a method to return the results we need, .push() should work for what we need
function countBy(x, n){
    let result = [];
    for(let i = 1; i <= n; i++){
        result.push(i * x)
    }
    return result;
}