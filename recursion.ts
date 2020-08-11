// 1. Write a function that accepts a number and count it down using recursion.

// (3) return 3 2 1
// (8) return 8 7 6 5 4 3 2 1

const countDown = (num: number): number | string => {
	// check for positif number
	if (num <= 0) return 'Only positif number!';
	if (num === 0) {
		return;
	}
	console.log(num);
	num--;
	countDown(num);
};

//console.log(countDown(0));

// 2. Write a function that accepts a number and multiply the range of that number (factorial).

// (3) return 6 because 3*2*1=6
// (4) return 24 because 4*3*2*1=24

const factorial = (num: number): number | string => {
	// check for positif number
	if (num <= 0) return 'Only positif number!';
	if (num === 1) return 1;
	return num * <any>factorial(num - 1);
};

//console.log(factorial(4));
