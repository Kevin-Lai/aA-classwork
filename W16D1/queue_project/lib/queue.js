// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

/*
 * Queue
 * - enqueue(item)
 * - dequeue()
 * - size()
 */
class Queue {
	// First In First Out (FIFO)
	
	// This queue implementation will use nodes as items in the queue
	// So, this queue implementation is basically a linked list
	
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	
	enqueue(item){
		// Create a new node for the item
		let newNode = new Node(item);
		
		if(!this.first){
			// if the queue is empty,
			// set the newNode to the front of the queue
			this.first = newNode;
			this.last = newNode;
		}
		else{
			// if the queue is not empty,
			// then put the newNode at the end of the queue
			this.last.next = newNode;
			this.last = newNode;
		}
		
		// Increment the length because a newNode was added
		this.length++;

		// return the current length of the queue
		return this.length;
	}

	dequeue(){
		if(!this.first){
			// if the queue is currently empty,
			// then there is nothing to remove,
			// so just return null
			return null;
		}
		
		// Check the first node in the queue
		let tempNode = this.first;
		
		// if the first node in the queue is also the last node in the queue
		// then the queue's last node will need to be set to null
		// because it will be removed from the queue
		if(this.first === this.last){
			this.last = null;
		}
		
		// then set the front node of the queue to the next node 
		this.first = this.first.next;
		
		// then decrement the length
		this.length--;
		
		// return the value of the dequeued node
		return tempNode.val;
	}
	
	size(){
		// Simply return the length of the queue
		return this.length;
	}
	
}

exports.Node = Node;
exports.Queue = Queue;