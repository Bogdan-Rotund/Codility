"use strict";

function solution(A) {
    var B = [];
    var len = A.length;
    var sum = (len * (len + 1)) / 2;

    for (var i = 0; i < len; i++) {
        if (B[A[i]]) {
            return 0;
        }
        B[A[i]] = true;
        sum -= A[i];
    }

    if (sum === 0) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = {
    solution: solution
};