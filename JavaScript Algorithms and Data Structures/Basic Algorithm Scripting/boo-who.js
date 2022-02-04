/*
In JavaScript, true and false don't represent any numerical values.

When comparing values, there is a difference between the == operator and the === operator.
The == equality operator happily converts between types to find a match, so 1 == true
evaluates to true because true is converted to 1. The === type equality operator does not
do type conversions, so 1 === true evaluates to false because the values are of different
types.
*/

function booWho(bool) {
  if (bool === true || bool === false) return true;
  return false;
}

console.log(booWho(null));
console.log(booWho(1));