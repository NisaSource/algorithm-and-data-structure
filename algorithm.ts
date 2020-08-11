// npx ts-node algorithm.ts
// 1. Write a function that calculates the sum of all numbers from 1 up to some number of n

// Naive solution (O(n))
const sumOfNums = (n: number): number => {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += i;
	}
	return result;
};

// Better Solution (O(1))
const sumUpToNums = (n: number): number => {
	return (n * (n + 1)) / 2;
};

// 2. Write a function which takes in a string and returns counts of each chars in the string

interface ICharCounter {
	[key: string]: number;
}

// Use RegEx
const charCounterWithRegex = (str: string): ICharCounter => {
	let result: ICharCounter = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			result[char] = result[char]++ || 1;
		}
	}
	return result;
};

//console.log(charCounterWithRegex('Hello hi'));

// Use charCode
const charCounterWithCharcode = (str: string): ICharCounter => {
	let result: ICharCounter = {};
	for (let char of str) {
		if (isAlphaNumerics(char)) {
			char = char.toLowerCase();
			result[char] = result[char]++ || 1;
		}
	}
	return result;
};

const isAlphaNumerics = (char: string): boolean => {
	let code: number = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	) {
		return false;
	}
	return true;
};

//console.log(charCounterWithCharcode('Hello hi'));

// 3. Write a function which accepts 2 arrays and should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Naive Solution
const comparedArrSquared = (arr1: number[], arr2: number[]): boolean => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 1; i < arr1.length; i++) {
		let correctIndex: number = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
};

//console.log(comparedArrSquared([1, 2, 3, 5], [9, 1, 4, 16]));

// Better solution (O(n))
interface IComparedFrequencyCounter {
	[key: string]: number;
}
const comparedFrequencyCounter = (arr1: number[], arr2: number[]): boolean => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let freqCounter1: IComparedFrequencyCounter = {};
	let freqCounter2: IComparedFrequencyCounter = {};
	for (let val of arr1) {
		freqCounter1[val] = (freqCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
	}
	for (let key in freqCounter1) {
		if (!(((key as unknown) as number) ** 2 in freqCounter2)) {
			return false;
		}
		if (freqCounter2[((key as unknown) as number) ** 2] !== freqCounter1[key]) {
			return false;
		}
	}
	return true;
};

//console.log(comparedFrequencyCounter([1, 2, 3, 4], [9, 1, 4, 16]));

// 4. Write a function that accepts 2 strings and determine if the second string
// is an anagram of the first. (Anagram Algorithm)

// ("anagram", "nagaram")
// {"a": 3, "n":1, "g":1, "r":1, "m":1}
// return true if {"a":0, "n":0, "g":0, "r":0, "m":0}

interface IValidAngaram {
	[key: string]: number;
}

const validAnagram = (str1: string, str2: string): boolean => {
	if (str1.length !== str2.length) {
		return false;
	}
	let result: IValidAngaram = {};
	for (let i = 0; i < str1.length; i++) {
		result[str1[i]] ? (result[str1[i]] += 1) : (result[str1[i]] = 1);
	}
	for (let i = 0; i < str2.length; i++) {
		if (!result[str2[i]]) {
			return false;
		} else {
			result[str2[i]] -= 1;
		}
	}
	console.log(result);
	return true;
};

//console.log(validAnagram('anagram', 'nagaram'));

// 5. Write a function which accepts a sorted array of number,
// and counts the unique values in the arr. The value could be negative numb.
// [1,1,1,1,2] return 2
// [] return 0
// [1,2,3,3,4] return 4

const uniqueValuesCounter = (arr: number[]): number => {
	if (!Array.isArray(arr) || arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

//console.log(uniqueValuesCounter([]));

// 6. Write a function which accepts an array and a number.
// The function should calculate teh max sum of n consecutive
// elements in the array.

//([1,2,5,2,8,1,4], 2) return 10
//([], 3) return null

const maxSumOfSubArr = (arr: number[], num: number): number | null => {
	if (!Array.isArray(arr) || !Number(num) || arr.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

//console.log(maxSumOfSubArr([], 2));

// 7. write a function that accepts a sorted array and a value.
// The function should return the index where the value passed
// to the function is located.

// ([1,2,3,4,5,6], 4) return 3
// ([1,2,3,4,5,6], 11) return -1

const numberSearcher = (arr: number[], num: number): number => {
	if (!Array.isArray(arr) || !Number(num)) return -1;

	let min = 0;
	let max = arr.length - 1;
	while (min <= max) {
		let middle = Math.floor((min + max) / 2);

		if (arr[middle] < num) {
			min = middle + 1;
		} else if (arr[middle] > num) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
};

console.log(numberSearcher([1, 2, 3, 4, 5, 6], 4));
