// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

const str1 = "racecar";
const str2 = "string";

var isPalindrome = function(str) {
    let len = Math.floor(str.length / 2);
    for(i = 0; i <= len; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(str2));