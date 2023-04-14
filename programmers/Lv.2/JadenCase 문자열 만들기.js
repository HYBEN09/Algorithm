//https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수

function solution(s) {
  // 문자열 s를 모두 소문자로 변환합니다.
  s = s.toLowerCase();
  // 문자열 s를 단어 단위로 쪼개어 배열로 만듭니다.
  const words = s.split(" ");
  // 배열의 각 요소를 순회하며, 각 요소의 첫 번째 문자를 대문자로 변경하고, 나머지 문자는 소문자로 변경합니다.
  const convertedWords = words.map((word) => {
    // 각 요소의 첫 번째 문자를 대문자로 변경합니다.
    const firstChar = word.substring(0, 1).toUpperCase();
    // 나머지 문자는 소문자로 변경합니다.
    const restChars = word.slice(1).toLowerCase();
    // 첫 번째 문자와 나머지 문자를 합쳐 반환합니다.
    return firstChar + restChars;
  });
  // 변환된 배열을 다시 문자열로 합쳐 반환합니다.
  return convertedWords.join(" ");
}

console.log(solution("3people unFollowed me"));
