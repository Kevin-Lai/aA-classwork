// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
		// Each node just contains a value and the next node it points to
		this.val = val;
		this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
	
	// Since this is a Singly Linked List, the direction will be singular and will go from head to tail
    constructor() {
		// This linked list will have a head, tail, and length
		this.head = null;
		this.tail = null;
		this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
		// Create a new node that will contain the value
		let newNode = new Node(val);

		// check if the linked list is currently empty
		if(!this.head){
			// if the linked list is empty, assign the head to the new node
			this.head = newNode;
		}
		else{
			// otherwise, assign the new node to the current tail's next pointer
			this.tail.next = newNode;
		}

		// Set the new tail to the new node
		this.tail = newNode;
		
		// Increment the length
		this.length++;
		
		// return Updated Linked List
		return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
		// if the linked list is empty, just return undefined
		if (!this.head){
			return undefined;
		}
		
		// Because this is a singly linked list,
		// we need to start from the head to traverse down to the tail
		// to get the node immediately before the tail
		
		// if this was a doubly linked list,
		// then, we could just use tail.prev
		// to get the node immediately before the tail
		
		// Keep track of the current node that we are looking at, starting from the head
		let currentNode = this.head;
		
		if(this.length === 1){
			// if there was only 1 node in the list
			// simply set both the head and tail to null
			this.head = null;
			this.tail = null;
			
			// and return Removed Node
			return currentNode;
		}
		
		// This temp tail will keep track of the node right before the tail
		let tempTail = currentNode;
		
		// Stop looping when currentNode = tail
		// because tail.next = null
		while(currentNode.next){
			// if the current node has a node after it,
			// then we continue to traverse through the list
			// until we reach the tail
			
			tempTail = currentNode;
			currentNode = currentNode.next;
		}
		
		// when we reach the tail of list,
		// the currentNode will be set to the tail
		// but we want the node before the currentNode which is the tempTail

		// Set the new tail to the tempTail
		this.tail = tempTail;
		
		// Set the tail.next to null to remove the previous tail from the list
		this.tail.next = null;

		// Decrement the length of the list
		this.length--;

		// return Removed Node		
		return currentNode;
		
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
		// Create a new node that will contain the value
		let newNode = new Node(val);

		// check if there is already a head node
		if(this.head){
			// if there is an existing head node,
			// assign the newNode's next pointer to the current head node
			newNode.next = this.head;
		}
		else{
			// if the linked list is currently empty,
			// set the tail to the newNode
			this.tail = newNode;
		}

		// Set the new head to the new node
		this.head = newNode;
		
		// Increment the length
		this.length++;

		// return Updated Linked List
		return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
		if(!this.head){
			return undefined;
		}
		
		// store the current head node
		// because we need to return it
		let removedHead = this.head;
		
		// Set the current head node to the removed head's next node
		this.head = removedHead.next;
		
		// Decrement the length
		this.length--;
		
		// if there was only a single node in the list
		// then, we also need to set the tail node to null
		// because after removing the head,
		// there would be no nodes left in the list
		if(!this.length){
			this.tail = null;
		}
		
		// return Removed Node
		return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
		
		// Start from the head
		let currentNode = this.head;
		
		// Check each node's value to see
		// if it matches the target
		while(currentNode){
			if(currentNode.val === target){
				// if the target is found
				// return true
				return true;
			}
			currentNode = currentNode.next;
		}
		
		// if the target is not found in the list,
		// return false
		return false;
    }

    // TODO: Implement the get method here
    get(index) {
		
		// check if the index is less than 0
		// or greater than the lenghth of the list
		if(index < 0 || index >= this.length){
			// return null immediately
			return null;
		}
		
		// iterate through the nodes starting from the head
		let currentNode = this.head;

		// keep track of the count
		let count = 0;
		
		// keep looping until count is equal to the index
		while(count < index){
			currentNode = currentNode.next;
			count++;
		}
		
		// return the node at the index
		return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
		// get the node that will need to be set
		let indexNode = this.get(index);
		
		// if the node exists in the list
		if(indexNode){
			// set the node's value to the new value
			indexNode.val = val;
			
			// return true if successful
			return true;
		}
		
		// else, return false
		return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
		// check if the index is less than 0
		// or greater than the lenghth of the list
		if(index < 0 || index >= this.length){
			// return false immediately
			// because it is outside of range to insert
			return false;
		}
		else if(index === 0){
			// add to head if index is the first index in the list
			this.addToHead(val);
			
			// return true after insert
			return true;
		}
		else if(index === this.length-1){
			// add to tail if index is the last index in the list
			this.addToTail(val);
			
			// return true after insert
			return true;
		}

		// get the node that is one index before the insertion index
		let prevNode = this.get(index-1);
		
		// store the prevNode's next pointer
		let tempNode = prevNode.next;
		
		// create a new node for the insertion value
		let newNode = new Node(val);
		
		// set the prevNode.next to the new node
		prevNode.next = newNode;
		
		// set the newNode.next to the tempNode
		newNode.next = tempNode;
		
		// so it looks like this:
		// prevNode -> newNode -> prevNode.next
		
		// increment the length of the list
		this.length++;
		
		// return true if successful
		return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
		if(index < 0 || index >= this.length){
			// return undefined immediately
			// because it is outside of range to insert
			return undefined;
		}
		else if(index === 0){
			// if index is 0, return the removed head
			return this.removeHead();
		}
		else if(index === this.length-1){
			// if the index is the last index in the list, return the removed tail
			return this.removeTail();
		}

		// get the node that is one index before the index of the node to remove
		let prevNode = this.get(index-1);
		
		// take the node to remove to return later
		let removeNode = prevNode.next;
		
		// then, take the node after the node to remove
		let tempNode = removeNode.next;
		
		// set the prevNode.next to the tempNode
		prevNode.next = tempNode;
		
		// previously, list looks like:
		// prevNode -> removeNode -> tempNode
		// now, list looks like:
		// prevNode -> tempNode
		
		// return Removed Node
		return removeNode;
    }

    // TODO: Implement the size method here
    size() {
		// return the number of nodes or length of the linked list
		return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
