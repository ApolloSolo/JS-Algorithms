const nums = [1, 3, 2, 12, 33, 1012, 10]

function isEven(arr) {
    const evenNums = arr.filter(num => num % 2 === 0);
    return evenNums
}

console.log(isEven(nums));