// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
		this.next = null;
		this.val = val;
	}
}

/*
 * Stack
 * - push(val)
 * - pop()
 * - size()
 */
class Stack {
	// Last In First Out (LIFO)
	
	// This stack implementation will use nodes as items in the stack
	// So, this stack implementation is basically a linked list
	
	constructor(){
		// The top is the head node in the list
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	
	push(val){
		
		let newNode = new Node(val);
		
		if(!this.top){
			// if the stack is currently empty,
			// set the newNode to both the top and bottom of the stack
			this.top = newNode;
			this.bottom = newNode;
		}
		else {
			// otherwise, if a node exists in the stack
			// store the current top node
			// set the top node to the newNode
			// and set the newNode's next pointer to the stored top node
			
			// so, the list now looks like:
			// newNode -> topNode
			
			let topNode = this.top;
			this.top = newNode;
			this.top.next = topNode;
		}
		
		// increment the length by 1
		this.length++;
		
		// return the current length of the stack
		return this.length;
	}
	
	pop(){
		if(!this.top){
			// if there are no nodes in the list
			// immediately return null
			return null;
		}
		
		// store the current top node
		// because we need to return it's value
		let poppedNode = this.top;
		
		if(poppedNode === this.bottom){
			// if the poppedNode is the only node in the list
			// then, we need to set the bottom node to null
			// because there will be no nodes remaining
			// after removing the poppedNode	
			this.bottom = null;
		}
		
		// store the top's next node
		// because that will become the new top node in the list
		let newTopNode = poppedNode.next;
		
		// set the top node to the new top
		this.top = newTopNode;
		
		// decrement the length of the list
		// after removing the node
		this.length--;
	
		// return the popped node's value
		return poppedNode.val;
	}
	
	size(){
		// simply return the length of the list
		return this.length;
	}
}

exports.Node = Node;
exports.Stack = Stack;
