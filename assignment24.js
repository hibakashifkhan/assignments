"use strict";
const string1 = "hello";
const string2 = "world";
console.log("Tests for equality and inequality with strings:");
console.log(string1 === "hello"); // True
console.log(string1 !== "hello");
// Tests using the lower case function
const mixedCaseString = "Hello";
console.log("\nTests using the lower case function:");
console.log(mixedCaseString.toLowerCase() === "hello"); // True
console.log(mixedCaseString.toLowerCase() === "Hello");
//numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 20;
console.log("\nNumerical tests:");
console.log(num1 === 10);
console.log(num1 !== 10);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num2 >= 20);
console.log(num2 <= 10);
//tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log("\nTests using 'and' and 'or' operators:");
console.log(condition1 && condition2); // True
console.log(condition1 || condition2);
