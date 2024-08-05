/**
 * Find Difference

Problem Statement: Write a program to find the difference between two numbers.
Input: The input consists of two integers.
Output: Output will be the difference.
Constraints: -2 31 ≤ |S| ≤ 231 - 1

Example: Enter two numbers
Input: 50 30
Output: 20
 */

function main(input) {
	// Write JavaScript code from here

	const data = input.split(" ");
	const a = parseInt(data[0]);
	const b = parseInt(data[1]);
	console.log(a - b);
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
