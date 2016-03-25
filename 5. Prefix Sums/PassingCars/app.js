"use strict";

function solution(A) {
    var sum = 0;
    var n = A.length;
    var pairs = 0;
    var zeroes = 0;

    for (var i =  n - 1; i >= 0; i--) {        
        if (A[i] === 1) {
            sum++;
            A[i] = sum;
        }
    }
    
    for (i = 0; i < n; i++) {
        if (A[i] === 0) {
            zeroes++;
        } else {
            pairs += zeroes * A[i];
            zeroes = 0;
        }
    }
    
    if (pairs > 1000000000) {
        return -1;
    }
    
    return pairs;
}