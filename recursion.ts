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

// 3. Write a function that accepts array of number and take all the odd value.

// [1,2,3,4,5] return [1,3,5]
// [] return []

// Solution with the helper function
const oddValues = (arr: number[]): number[] => {
	let result = [];

	const helperFunction = (helperArrInput: number[]): number[] => {
		if (!Array.isArray(helperArrInput) || helperArrInput.length === 0) return;

		if (helperArrInput[0] % 2 !== 0) {
			result.push(helperArrInput[0]);
		}

		helperFunction(helperArrInput.slice(1));
	};

	helperFunction(arr);
	return result;
};

//console.log(oddValues([]));

// Solution with recursion
const oddNumbers = (arr: number[]): number[] => {
	let newArr = [];

	if (!Array.isArray(arr) || arr.length === 0) return newArr;

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(oddNumbers(arr.slice(1)));
	return newArr;
};

console.log(oddNumbers([1, 2, 3, 4, 5]));
