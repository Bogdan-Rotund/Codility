"use strict";

function solution(A) {
    var B = [];

    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            B[A[i]] = true;
        }
    }

    for (i = 1; i < B.length; i++) {
        if (!B[i]) {
            return i;
        }
    }

    return B.length || 1;
}

module.exports = {
    solution: solution
};
