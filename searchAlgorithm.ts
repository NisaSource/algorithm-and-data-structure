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

console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 100));
