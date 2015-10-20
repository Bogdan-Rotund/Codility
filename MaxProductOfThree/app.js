'use strict';

function solution(A) {
    A = A.sort((a, b) => a - b);
    var n = A.length - 1;
    
    return Math.max(
        A[n] * A[n - 1] * A[n - 2], 
        A[0] * A[1] * A[n]);    
}