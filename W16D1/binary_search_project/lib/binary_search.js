function binarySearch(array, target) {
	// if the array is empty,
	// return false because the target
	// will not be found in an empty array
	if(!array.length){
		return false;
	}
	
	// Take the middle index of the array
	let middleIndex = Math.floor(array.length/2);
	
	// Split the array into 2 separate sides
	let leftSide = array.slice(0, middleIndex);
	let rightSide = array.slice(middleIndex + 1);
	
	if(target < array[middleIndex]){
		// if target is less than the middle element
		// search the left side of the array
		return binarySearch(leftSide, target);
	}
	else if(target > array[middleIndex]){
		// if target is greater than the middle element
		// search the right side of the array
		return binarySearch(rightSide, target);
	}
	else{
		// if array[middleIndex] === target
		return true;
	}
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};