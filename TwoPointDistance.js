/**
 * Two Point Distance

Problem Statement: Write a program to calculate distance between two points.
Input: The input consists of four double numbers. the first two numbers indicate the co-ordinate of first point and the second two numbers indicate the co-ordinates of second point.
Output: Output is the distance of two points.
Constraints: The program should print the number with exactly two decimal points.

Example: Enter the co-ordinates of two points.
Input: 0 0 and 2 2
Output: Distance: 2.83
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split("\n");
	const a = data[0].split(" ");
	const b = data[1].split(" ");
	const x1 = Number(a[0].split(" "));
	const x2 = Number(b[0].split(" "));
	const y1 = Number(a[1].split(" "));
	const y2 = Number(b[1].split(" "));

	const c = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	console.log(`Distance: ${c.toFixed(2)}`);
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
