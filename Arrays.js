// Arrays are ordered, but typically have slower lookups than objects

let names = ["Michael", "Melissa", "Andrea"]
// Indexes   "Michael"  "Melissa"  "Andrea"
//               0          1         2

let values = [true, {}, [], 2, "awesome"]

// Insertion
.push() // O(1) Adds a value to the end of an array.
.pop() // O(1) Removes a value from the end of an array.
// Inserting at the end of an array is a quick operation O(1), due to the index not being assigned yet.
// However if you insert at the beginning, each index has to shift once due to the 0 index being reassigned, making it a lot slower O(N).

// Removal
.shift() // O(N) Adds a value to the beginning of an array
.unshift() // O(N) Removes a value from the beginning of an array 
// Follows the same principles as insertion.

// Searching
// The fastest you can search an array will always be O(N) or more.

// Access
// Access will always be O(1) if you know the index of the value you're accessing.

// Some Other Array Methods

.concat() // O(N) Takes multiple arrays and merges them together

.slice() // O(N) Returns a part of an array.

.splice() // O(N) Removes and adds a new element to an array

.sort() // O(N * log N) Sorts an array based on values, either in alphebetical or numerical order

.forEach() .map() .filter() .reduce() // O(N) These all loop through arrays in different ways.




