/**
 * Three Number Average

Problem Statement: Write a program that finds the average of three numbers entered by the user.
Input: The input consists of 3 float.
Output: Output will be a float number.
Constraints: 1.2E-38 ≤ |S| ≤ 3.4E+38 and The program should print the number with exactly two decimal points.

Example: Enter three numbers
Input: 10 20 30
Output: Average: 20.00
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const numbers = input.split(" ");
	const num1 = parseFloat(numbers[0]);
	const num2 = parseFloat(numbers[1]);
	const num3 = parseFloat(numbers[2]);

	const avg = (num1 + num2 + num3) / 3;
	console.log(`Average: ${avg.toFixed(2)}`);
}

//This code for Code-Mama playground
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
