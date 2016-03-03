"use strict";

function solution(N, A) {
    var B = [];
    var max = 0;
    var maxOut = false;
    var maxOutValue = 0;
    
    for (var i = 0; i < N; i++) {
        B[i] = 0;
    }
    
    for (i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            if (!maxOut) {
                B[A[i] - 1]++;
            } else {
                if (B[A[i] - 1] >= maxOutValue) {
                    B[A[i] - 1]++;
                } else {
                    B[A[i] - 1] = maxOutValue + 1;
                }
            }
            
            if (B[A[i] - 1] > max) {
                max = B[A[i] - 1];
            }
        } else {
            maxOut = true;
            maxOutValue = max;
        }        
    }

    for (i = 0; i < N; i++) {
        if (B[i] < maxOutValue) {
            B[i] = maxOutValue;
        }
    }
  
    return B;
}