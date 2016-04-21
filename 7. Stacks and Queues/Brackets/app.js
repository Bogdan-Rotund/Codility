function solution(S) {
  var stack = [];
  
  for (var i = 0; i < S.length; i++) {
    switch(S[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(S[i]);
        break;
      case ')':
        if (stack.length && stack[stack.length - 1] === '(') {
          stack.pop();
        } else {
          return 0;
        }
        break;
      case '}':
      if (stack.length && stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          return 0;
        }
        break;
      case ']':
        if (stack.length && stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          return 0;
        }
        break;
    }
  }
  
  return stack.length ? 0 : 1;
}

console.log(solution("{[()()]}"));
console.log(solution("{[()(]}"));