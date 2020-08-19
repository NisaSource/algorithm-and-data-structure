const swap = (
	arr: number[] | string[],
	firstIdx: number,
	secondIdx: number
): number[] | string[] => {
	let temp = arr[firstIdx];
	arr[firstIdx] = arr[secondIdx];
	arr[secondIdx] = temp;
	return arr;
};

// 1. Bubble Sort (O(n*n))
// It's bubble up the highest value to the end

const bubbleSort = (arr: number[]): number[] => {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let val = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = val;
			}
		}
	}
	return arr;
};

//console.log(bubbleSort([3, 2, 5, 4, 1]));

// 2. Selection Sort
// It places small values to the first element

const selectionSort = (arr: number[] | string[]): number[] | string[] => {
	let min: number;
	for (let i = 0; i < arr.length; i++) {
		min = i;

		for (let j = i + 1; j < arr.length; j++) {
			//console.log('minnnnnnnn', min);
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) {
			swap(arr, i, min);
		}
	}
	return arr;
};

// console.log(selectionSort([3, 2, 5, 4, 1]));
// console.log(selectionSort(['h', 'a', 'g', 'e', 'd']));

// 3. Insertion sort
// inserting one item at a time in a right place

const insertionSort = (arr: number[] | string[]): number[] | string[] => {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j -= 1;
		}
		arr[j + 1] = current;
	}
	return arr;
};

// console.log(insertionSort([3, 2, 5, 4, 1]));
// console.log(insertionSort(['c', 'a', 'b', 'e', 'd']));

// Bubble Sort, Selection Sort and Insertion Sort are perfect to use
// if the length of the array is less than 20.
// For the larger array, try the Sorts below.

// 4. Merge Sort (Split, sort, merge)
// Split up the array into smallest array until 1 element left,
// then compare the array and sort them, then merge it together after it sorted.

const mergeArr = (
	arr1: number[] | string[],
	arr2: number[] | string[]
): number[] | string[] => {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		// compare the elements
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	// check if there is any item left in the arr, then push the elemetns in to result.
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
};

//console.log(mergeArr([2, 4, 8, 11], [1, 3, 5, 6, 7, 15]));

const mergeSort = (arr: number[] | string[]): number[] | string[] => {
	//check if the user input array
	if (!Array.isArray(arr)) return null;
	else if (arr.length <= 1) return arr;

	// Because we will split up the array in to 2 arrays, so we set the middle point
	let midPoint = Math.floor(arr.length / 2);

	// Take the first half array
	let firstHalf = mergeSort(arr.splice(0, midPoint));

	// Take the other half
	let secondHalf = mergeSort(arr.splice(-midPoint));

	// Merge
	return mergeArr(firstHalf, secondHalf);
};

// console.log(mergeSort([2, 4, 8, 11, 1, 3, 5, 6, 7, 15]));

// 5. Quick Sort

const pivot = ({
	arr,
	start = 0,
	end = arr.length + 1,
}: {
	arr: number[] | string[];
	start?: number;
	end?: number;
}): number => {
	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
};

const quickSort = ({
	arr,
	leftPoint = 0,
	rightPoint = arr.length - 1,
}: {
	arr: number[] | string[];
	leftPoint?: number;
	rightPoint?: number;
}): number[] | string[] => {
	if (leftPoint < rightPoint) {
		let pivotIdx = pivot({ arr, start: leftPoint, end: rightPoint });

		quickSort({ arr, leftPoint, rightPoint: pivotIdx - 1 });

		quickSort({ arr, leftPoint: pivotIdx + 1, rightPoint });
	}
	return arr;
};

//console.log(quickSort({ arr: [2, 4, 8, 11, 1, 3, 5, 6, 7, 15] }));

// 6. Radix Sort
// No comparing on this sort. It uses list based on the code.

// Get the digit
const getDigit = (num: number, i: number): number => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// Count digits in num
const countDigit = (num: number): number => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};
//console.log(countDigit(20));

// Count most digits
const mostDigits = (arr: number[]): number => {
	let maxDigit = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigit = Math.max(maxDigit, countDigit(arr[i]));
	}
	return maxDigit;
};

//console.log(mostDigits([23, 213, 20, 12312, 53478901]));

const radixSort = (arr: number[]): number[] => {
	let countMaxDigit = mostDigits(arr);
	for (let i = 0; i < countMaxDigit; i++) {
		let bucket = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < arr.length; j++) {
			let digit = getDigit(arr[j], i);
			bucket[digit].push(arr[j]);
		}

		arr = [].concat(...bucket);
	}

	return arr;
};

//console.log(radixSort([231, 23, 7658, 9012, 459812]));
