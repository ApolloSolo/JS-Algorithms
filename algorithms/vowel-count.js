// Write code to return the the number of vowels in `str`
let string = "Hello all"

var vowelCount = function (str) {
    str = str.toLowerCase();
    const vowles = ["a", "e", "i", "o", "u"];
    let newStr = str.split("");
    let vowelCount = 0;

    for(let i = 0; i < newStr.length; i++){
        for(let j = 0; j < vowles.length; j++){
            if(newStr[i] === vowles[j]) {
                vowelCount += 1;
            }
        }
    }

    return vowelCount
};

console.log(vowelCount(string))