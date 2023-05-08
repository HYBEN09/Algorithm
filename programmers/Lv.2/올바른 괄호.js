//school.programmers.co.kr/learn/courses/30/lessons/12909

//주어진 문자열 s를 순회하면서 열린 괄호 '('가 나오면 스택에 push하고, 닫힌 괄호 ')'가 나오면 스택에서 가장 최근에 push된 열린 괄호를 pop 합니다.
//모든 문자를 순회한 후, 스택이 비어있으면 true를 반환하고, 스택이 비어있지 않으면 false를 반환합니다.
//만약 문자열 s가 열린 괄호로만 이루어져 있으면, 스택이 빈 상태로 끝나지 않으므로 false를 반환합니다. 마찬가지로 닫힌 괄호로만 이루어져 있으면 false를 반환합니다.

function solution(s) {
  // 스택을 생성합니다.
  const stack = [];
  // 문자열을 한 글자씩 순회합니다.
  for (let i = 0; i < s.length; i++) {
    // 현재 글자를 가져옵니다.
    const word = s[i];

    // 현재 글자가 '('인 경우, 스택에 추가합니다.
    if (word === "(") {
      stack.push(word);
    } else {
      // 현재 글자가 ')'인 경우,
      // 스택이 비어있는 경우 false를 반환합니다.
      if (stack.length === 0) {
        return false;
      }
      // 스택에서 '('를 꺼냅니다.
      stack.pop();
    }
  }
  return stack.length === 0;
}
