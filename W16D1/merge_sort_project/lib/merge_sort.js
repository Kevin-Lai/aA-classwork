function merge(array1, array2) {
	// Assumption: The 2 input arrays are already sorted
	
	let merged = [];
	
	// We need to continue to merge the 2 arrays while there are still elements in both input arrays.
	// Exit the loop once 1 array is empty,
	// then, just append the leftover values to the merged array.
	while(array1.length && array2.length){

		// Get the first element from each array
		let ele1 = array1[0];
		let ele2 = array2[0];
		
		let nextEle = 0;
		
		// If array1's element is less than array2's element
		// then, you need to remove the element from array1.
		// Otherwise, you need to remove the element from array2.
		if(ele1 < ele2){
			nextEle = array1.shift();
		}
		else {
			nextEle = array2.shift();
		}
		merged.push(nextEle);
	}
	
	// Concat the leftover values to the end of the merged array
	return merged.concat(array1, array2);
}

/*
 * Merge Sort
 * Time Complexity: O(nlog(n))
 * Space Complexity: O(n)
 */
function mergeSort(array) {
	
	// base case
	// if the array contains only 1 element or no elements
	// then, the array is already sorted
	// so just return the array
	if(array.length <= 1){
		return array;
	}
	
	// Get the middle index
	let midIdx = Math.floor(array.length/2);
	
	// Split the array into 2 separate arrays

	// Slice up to middle index (meaning the element at midIdx is excluded) for the left side
	let left = array.slice(0, midIdx);
	
	// If the 2nd parameter is not provided for slice
	// Then, the default ending index is the array length
	let right = array.slice(midIdx);
	
	// Then, pass each of the split arrays back into mergeSort so that each side is sorted
	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);
	
	// return the merged sorted array
	return merge(sortedLeft, sortedRight);
	
	// Each side is continuously split in half until it hits the base case
	// So, the resulting number of recursive calls is O(log(n))
	// However, because the merge() function contains a while loop which will take O(n) time,
	// the final resulting time complexity would be (n * log n)
	
}

module.exports = {
    merge,
    mergeSort
};