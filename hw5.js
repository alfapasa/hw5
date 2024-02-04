//1
let a;
let b;
if (a > b) {
    console.log(a + ' bigger than' + b);
} else if (a < b) {
    console.log(b + ' bigger than' + a);
} else {
    console.log('Digits are equal');
}


//2
let km;
let feet;
let feetToKm = (feet * (km / 1000));
if (km < feetToKm) {
    console.log(km + ' less than ' + feetToKm);
} else if (km > feetToKm) {
    console.log(feetToKm + ' less than ' + km);
} else {
    console.log(km + ' is equal to ' + feetToKm);
}


//3
let a;
let b;
if b / a === 0 {
    console.log('Digit ' + a + 'is the divisor of digit' + b);
} else {
    console.log('Digit ' + a + 'is not the divisor of digit' + b);
}

if a / b === 0 {
    console.log('Digit ' + b + 'is the divisor of digit' + a);
} else {
    console.log('Digit ' + b + 'is not the divisor of digit' + a);
}


//4
let a; //number
let b = (a % 2);
if b === 0 {
    console.log(`Degit ${a} is the even number, and the last digit is ${a % 10}`);
} else {
    console.log(`Degit ${a} is not the even number, and the last digit is ${a % 10}`);
}


//5
let a; //2digits number
let secondDigit = a % 10;
let firstDigit = parseInt((a % 100) / 10);

if (firstDigit > secondDigit) {
    console.log('First deigit is bigger');
} else if (secondDigit > firstDigit) {
    console.log('Second digit is bigger');
} else {
    console.log('Digits are equals');
}

//5 version2
let a; //2digits number
let secondDigit = a % 10;
let firstDigit = parseInt((a % 100) / 10);

console.log(firstDigit > secondDigit ? 'First deigit is bigger' : 'Second digit is bigger');


6 a
let a; //3digits number
let firstDigit = parseInt((a % 1000) / 100);
let secondDigit = parseInt((a % 100) / 10);
let thirdDigit = (a % 10);

if ((firstDigit + secondDigit + thirdDigit) / 2 === 0) {
    document.write('Yes, this is the even number');
} else {
    document.write('No, this is not the even number');
}

if ((firstDigit + secondDigit + thirdDigit) / 5 === 0) {
    document.write('Yes');
} else {
    document.write('No');
}

if ((firstDigit * secondDigit * thirdDigit) > 100) {
    document.write('Yes, it's bigger');
} else {
    document.write('No, it's not bigger');
}


7
let a; //3digits number
let firstDigit = parseInt((a % 1000) / 100);
let secondDigit = parseInt((a % 100) / 10);
let thirdDigit = (a % 10);

if ((firstDigit === secondDigit === thirdDigit)) {
    document.write('Yes, all digits are equal');
} else {
    document.write('No, digits are not equal');
}

document.write(firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit ? 'Yes' : 'No');


//8
//a
let a = 123321;

let digit1 = parseInt((a % 1000000) / 100000);
let digit2 = parseInt((a % 100000) / 10000);
let digit3 = parseInt((a % 10000) / 1000);
let digit4 = parseInt((a % 1000) / 100);
let digit5 = parseInt((a % 100) / 10);
let digit6 = (a % 10);

document.write((digit1 === digit6) && (digit2 === digit5) && (digit3 === digit4) ? "Yes" : "No");

//b
let a = 147741;

let digit1 = parseInt((a % 1000000) / 100000);
let digit2 = parseInt((a % 100000) / 10000);
let digit3 = parseInt((a % 10000) / 1000);
let digit4 = parseInt((a % 1000) / 100);
let digit5 = parseInt((a % 100) / 10);
let digit6 = (a % 10);

document.write((digit1 === digit6) && (digit2 === digit5) && (digit3 === digit4) ? "Yes" : "No");
