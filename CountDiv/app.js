"use strict";

function solution(A, B, K) {
    var offset = A % K === 0 ? 1 : 0;

    return Math.floor(B/K) - Math.floor(A/K) + offset;
}