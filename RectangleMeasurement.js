/**
 * Rectangle Measurement

Problem Statement: Write a program to calculate the area of a rectangle.
Input: The input consists of two integers.
Output: Output will be the area.
Constraints: -2 31 ≤ |S| ≤ 231 - 1

Example: Enter length, width.
Input: 10 20
Output: 200
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split(" ");
	const a = parseInt(data[0]);
	const b = parseInt(data[1]);
	console.log(a * b);
}

//This code for Code-Mama playground
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
