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
