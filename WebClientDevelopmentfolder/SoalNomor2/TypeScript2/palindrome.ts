function isPalindrome(str: string): boolean {
    //conversion to lowercase
    const cleanStr = str.toLowerCase();

    
    return cleanStr === cleanStr.split("").reverse().join("");
}

const testString = "man";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString));
