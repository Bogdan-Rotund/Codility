"use strict";

function solution(A) {
    var minSliceArray = [],
        counter = A.length - 2,
        currMinSliceLength = 0,
        min = Number.POSITIVE_INFINITY,
        minIndex = -1;

    minSliceArray[counter] = (A[counter] + A[counter + 1]) / 2;
    currMinSliceLength = 2;
    counter--;

    while (counter >= 0) {
        var a = (A[counter] + A[counter + 1]) / 2,
            b = (A[counter] + minSliceArray[counter + 1] * currMinSliceLength) / (currMinSliceLength + 1) ;
        if (a < b) {
            minSliceArray[counter] = a;
            currMinSliceLength = 2;
        } else {
            minSliceArray[counter] = b;
            currMinSliceLength++;
        }
        counter--;
    }
    
    for (var i = 0; i < minSliceArray.length; i++) {
        if (minSliceArray[i] < min) {
            min = minSliceArray[i];
            minIndex = i;
        }
    }
    return minIndex;
}