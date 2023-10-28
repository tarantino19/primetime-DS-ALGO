//categorizes time or memory management - it's not exact measurement.
//Often it will help us make decisions about what data structures and algorithms to use. Knowing how they will perform can greatly help create the best possible program out there.

//BIG o - as your input grows, how fast does your computation or memory grow?
//growth with respect to input

//RUNTIME?  on 2(n) - LOOK FOR LOOPS

function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		sum += n.charCodeAt(i);
	}

	return sum;
}

sum_char_codes('Hello');

// loop over inputs to see the big O complexity

//if i gave this x amount of input, will my program still be peformant?
//we drop constants

//important concepts
// 1 - growth is with respect to input
// 2 - constants are dropped
// 3 - worst case is usually what we measure
