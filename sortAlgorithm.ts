// 1. Bubble Sort (O(n*n))

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

console.log(bubbleSort([3, 2, 5, 4, 1]));
