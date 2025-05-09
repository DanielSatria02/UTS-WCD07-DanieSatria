function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let numbertocheck = 19;

const result = checkOddEven(numbertocheck);
console.log(`${numbertocheck} is an ${result} number.`);
