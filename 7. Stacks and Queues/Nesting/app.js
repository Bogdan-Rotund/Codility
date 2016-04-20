function solution(S) {
    var stack = [];
    
    for (var i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(S[i]);
        } else if (S[i] === ')') {
            if (!stack.length) {
                return 0;
            }
            
            stack.pop();
        }
    }
    
    return stack.length ? 0 : 1;
}