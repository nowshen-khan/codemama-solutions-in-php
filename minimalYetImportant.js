/**
 * Minimal yet Important

Problem Statement: Write a program that finds the minimum of three numbers entered by the user.
Input: The input consists of 3 integers.
Output: Output the minimum.
Constraints: -2 31 ≤ |S| ≤ 231 - 1

Example:Enter three numbers
Input: 10 20 30
Output: 10
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split(" ");
	const a = parseInt(data[0]);
	const b = parseInt(data[1]);
	const c = parseInt(data[2]);
	if (a < b) {
		if (a < c) {
			console.log(a);
		} else {
			console.log(c);
		}
	} else {
		if (b < c) {
			console.log(b);
		} else {
			console.log(c);
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
