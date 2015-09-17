"use strict";

function solution(X, A) {
    var B = [];
    var sum = (X * (X + 1)) / 2;

    for (var i = 0; i < A.length; i++) {
        if (!B[A[i]]) {
            sum -= A[i];
            if (sum == 0) {
                return i;
            }
            B[A[i]] = true;
        }
    }

    return -1;
}

module.exports = {
    solution: solution
};