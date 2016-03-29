"use strict";

function solution (N) {
  let maxBinaryGap = 0;
  let currentBinaryGap = 0;
  let binaryGapStarted = false;
  
  do {
    let remainder = N % 2;
    N = Math.floor(N / 2);
    
    if (remainder === 1) {
      if (binaryGapStarted) {
        if (currentBinaryGap > maxBinaryGap) {
          maxBinaryGap = currentBinaryGap;
        }
        currentBinaryGap = 0;
      } else {
        binaryGapStarted = true;
      }
    } else if (remainder === 0) {
      if (binaryGapStarted) {
        currentBinaryGap++;
      }
    }
    
  } while (N > 0);
  
  return maxBinaryGap;
}