"use strict";

function solution (A) {
  let oddOccurence = 0;
  
  for (let i = 0; i < A.length; i++) {
    oddOccurence = oddOccurence ^ A[i];
  }
  
  return oddOccurence;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));