// ============================================================================
// Interview Problem: Balanced Parentheses
// ============================================================================
//
// -------
// Prompt:
// -------
//
// You are building a linter for your company's new custom text editor to keep
// the code smells out of your (anticipated) massive codebase! Part of your 
// technical design includes writing a function that checks that all of the 
// parentheses in your engineers' code are balanced.
//
// Given a string of text, write a function that returns true if the 
// parentheses are balanced, and false if they are not.
//
// Note: Your code should ignore all non-bracket characters in the input 
//       string.
//
// ------
// Bonus: 
// ------
//  
// Though you may want to start by writing a function that simply handles
// parentheses as an MVP, to build a truly impactful product you must handle 
// ALL bracket types, including:
//
//         - Parentheses:     ()
//         - Square Brackets: []
//         - Curly Brackets:  {}
//
// Update your original balancedParens function to handle all bracket types.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must consume (at maximum) linear space, O(n).
//
// ---------------------------
// Example 1: Parentheses Only
// ---------------------------
//
// balancedParens('(');          => false
// balancedParens('()');         => true
// balancedParens(')(');         => false
// balancedParens(')()())');     => false
// balancedParens('((()()))');   => true
//
// -----------------------------
// Example 2: Parentheses + Text
// -----------------------------
//
// balancedParens('var x = Math.floor(2.5)');             => true
// balancedParens('var y = (((x + 5)/6) + 2*(x + 10))');  => true
// balancedParens('var z = ()(x + 5)/6) + 2*(x + 10))');  => false
//
// -----------------------
// Example 3: All Brackets
// -----------------------
//
// balancedParens('()[]{}');     => true
// balancedParens('[{()}]');     => true
// balancedParens('[{])({)[}');  => false
//
// ------------------------------
// Example 4: All Brackets + Text
// ------------------------------
//
// balancedParens('const roundDown = function(num) { return Math.floor(num) };');      => true
// balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }');  => true 
// balancedParens('function printThirdElement(array) { console.log(array[3]]] }');     => false 
//
// -----------
// Let's code!
// -----------
function balancedParens(str) {
	
	// Use stack to store every open parentheses.
	// When an closing parenthesis is encountered,
	// pop the top of the stack
	// and compare that popped element
	// with the encountered closing parenthesis.
	// If the popped element is a corresponding match to the closing parenthesis,
	// then continue until the end of the string.
	// If the end of string is reached,
	// then return true.
	// Otherwise, if a mismatch is encountered,
	// then return false.
	
	let parensDictionary = {
		"(": ")",
		"{": "}",
		"[": "]"
	}
	
	// Could also use Object.values(parensDictionary)
	let closeParens = ")}]";
	
	let stack = [];
	
	for(let i = 0; i<str.length; i++){
		if(parensDictionary.hasOwnProperty(str[i])){
			// Check if the current character is an open parenthesis.
			// And push it to the stack.
			stack.push(str[i]);
		}
		else if(closeParens.includes(str[i])){
			// Check if the current character is a closing parenthesis.
			let poppedParen = stack.pop();
			if( parensDictionary[poppedParen] !== str[i] ){
				// if the closing parenthesis does not match the corresponding popped element,
				// then return false
				return false;
			}
		}
		// do nothing if a character is not a parenthesis
	}
	
	// return true if no incorrect matches were found and the stack is empty
	return !stack.length;
}

exports.balancedParens = balancedParens;
