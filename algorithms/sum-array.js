// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
    let sum = arr.reduce((acc, curr) => acc += curr);
    return sum
};