// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
let string1 = "hello my Friends"
let string2 = "all little letters and stuff"

var titleCase = function (str) {
    let result = [];
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("");
        word[0] = word[0].toUpperCase();

        result.push(word.join(""));
    }
    return result.join(" ");
};


console.log(titleCase(string2));