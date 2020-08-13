// 1. Write a function which accepts an array and a value,
// and return the index at which the value exist. If it's not exist, return -1.

// linearSearch([1,2,3,4,5,6], 6) return 5
// linearSearch([1,2,3,4,5,6], 10) return -1

const linearSearch = (
	arr: number[] | string[],
	val: number | string
): number => {
	if (!Array.isArray(arr) || arr.length < 1) return null;

	for (let i = 0; i < arr.length; i++) {
		if (val === arr[i]) {
			return i;
		}
	}
	return -1;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 100));

// 2. Write a function which accepts a sorted array and a value,
// and return the index at which the value exist. Otherwise, return -1.

// binarySearch([1,2,3,4,5, 6], 3) return 2
// binarySearch([1,2,3,4,5, 6], 25) return -1

const binarySearch = (
	arr: number[] | string[],
	val: number | string
): number => {
	if (!Array.isArray(arr) || arr.length < 1) return null;

	let startPoint = 0;
	let endPoint = arr.length - 1;
	let midPoint = Math.floor((startPoint + endPoint) / 2);

	while (arr[midPoint] !== val && startPoint < endPoint) {
		if (val < arr[midPoint]) {
			endPoint = midPoint - 1;
		} else {
			startPoint = midPoint + 1;
		}
		midPoint = Math.floor((startPoint + endPoint) / 2);
	}
	return arr[midPoint] === val ? midPoint : -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 25));
