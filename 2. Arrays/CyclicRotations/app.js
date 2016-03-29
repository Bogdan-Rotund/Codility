"use strict";

function solution(A, K) {
  if (!A.length) 
    return A;
  
  A.reverse();
  
  for (var i = 0; i < K; i++) {
    A.push(A.shift());
  }
  
  A.reverse();
  
  return A;
}