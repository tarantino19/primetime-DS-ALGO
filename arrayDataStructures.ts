//Data Structures
//Arrays

// An array is a memory space -  1 number, 4 bits /32 bits

const a = new ArrayBuffer(6);

console.log(a);

//Array and List are different esp in JS
//we can't grow an array, we only overwrite it
//we go to memory address, we go to the width of the byte and write in it
//deletion is sort of the same
//null = not something in the very something spot

//what is the big o of getting a value from an array
// constant time - cause we know the width  O(1)
// o1 does not depend on input

//Arrays - fixes size,cannot grow it, there's not insertAt or push or pop.
// DOES NOT mean you can't write those though
//in classical programming, you can't grow an array

//we can reallocate it, make a new array
//when creating an array in JS, there's a literal array underneath the hood
