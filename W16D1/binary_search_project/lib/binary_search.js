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

function binarySearchIndex(array, target, lo=0, hi=array.length - 1) {
    
	// this version returns the index of the target if found
	
	if (lo === hi) {
        return -1;
    }

    let middleIndex = Math.floor((lo + hi) / 2);

    if (target < array[middleIndex]) {
        return binarySearchIndex(array, target, lo, middleIndex);
    } else if (target > array[middleIndex]) {
        return binarySearchIndex(array, target, middleIndex + 1, hi);
    } else {
        return middleIndex;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};