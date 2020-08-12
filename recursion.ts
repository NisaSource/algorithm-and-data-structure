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

//console.log(oddNumbers([1, 2, 3, 4, 5]));

// 4. Write a function which accepts a base and an exponent.
// It should return the power of the base to the exponent.

// (2,0) // 1
// (2,4) // 16

const power = (num: number, exp: number): number => {
	if (exp <= 0) {
		return 1;
	} else {
		return num * power(num, exp - 1);
	}
};

//console.log(power(2, 4));

// 5. Write a function which takes an array of numbers and returns multiply of all the values.

// [1,2,3] return 6
// [1,2,3,5] return 30
// [] return 0;

const multiplyValues = (arr: number[]): number => {
	if (!Array.isArray(arr) || arr.length === 0) return 1;

	return arr[0] * multiplyValues(arr.slice(1));
};

//console.log(multiplyValues([]));

// 6. Write a function which accepts a number and adds up to all the numbers
// from 0 to the number passed to the function.

// (5) return 15 because 0+1+2+3+4+5=15
// (10) return 55

const sumAllNumbers = (num: number): number => {
	if (num <= 0) return 0;
	return num + sumAllNumbers(num - 1);
};

//console.log(sumAllNumbers(-1));

// 7. Write a recursive function which accepts a number and return the nth number
// in the Fibonacci sequence.

// (10) return 55
// (28) return 317811

const fibonacci = (num: number): number => {
	if (num <= 0) {
		return null;
	} else if (num === 1) {
		return 1;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
};

//console.log(fibonacci(0));

// 8. Write a recursive function which accepts a string and returns a new string reverse.

// reverseString("dog") return "god"
// reverseString("amazing") return "gnizama"

const reverseString = (str: string): string => {
	if (str.length <= 1) return str;
	return reverseString(str.slice(1)) + str[0];
};

//console.log(reverseString('o'));

// 9. Write a function which returns true if the string passed to it
// is a palindrome.

// isPalindrome("phone") return false
// isPalindrome("nababan") return true
// isPalindrome('aa') return true

const isPalindrome = (str: string): boolean => {
	if (str.length === 1) {
		return true;
	} else if (str.length === 2) {
		return str[0] === str[1];
	} else if (str[0] === str.slice(-1)) {
		return isPalindrome(str.slice(1, -1));
	} else {
		return false;
	}
};

// console.log(isPalindrome('aa'));
// console.log(isPalindrome('phone'));
// console.log(isPalindrome('nababan'));
