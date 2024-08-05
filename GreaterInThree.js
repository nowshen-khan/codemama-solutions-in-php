/**
 * Greater in Three

Problem Statement: Write a program that finds the maximum of three numbers entered by the user.
Input: The input consists of 3 integers.
Output: Output the maximum
Constraints: -2 31 ≤ |S| ≤ 231 - 1

Example: Enter three numbers
Input: 10 20 30
Output: 30
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const numbers = input.split(" ");
	const num1 = parseInt(numbers[0]);
	const num2 = parseInt(numbers[1]);
	const num3 = parseInt(numbers[2]);

	// console.log(data)
	if (num1 < num2) {
		if (num2 < num3) {
			console.log(num3);
		} else {
			console.log(num2);
		}
	} else {
		if (num1 < num3) {
			console.log(num3);
		} else {
			console.log(num1);
		}
	}
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
