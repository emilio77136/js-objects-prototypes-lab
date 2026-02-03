const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => {
	return num * num;
});


const evens = numbers.filter(num => {
	return num % 2 == 0;
});


const sum = numbers.reduce((total, num) => {
	return total + sum;
}, 0);


console.log("Squared: ", squared);
console.log("Evens: ", evens);
console.log("Sum: ", sum);
