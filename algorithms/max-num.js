// Write code to return the largest number in the given array
const array = [5, 0, 12, 33, 2];

var maxNum = function(arr) {
    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        
        if(currentNum > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
};

console.log(maxNum(array))