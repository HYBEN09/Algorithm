// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 문자열 s에는 공백으로 구분된 숫자
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 (min,max)
// 문자열을 반환하는 함수 (split())

function solution(s) {
  // 문자열을 공백으로 나누어 배열로 만들기
  const arr = s.split(" ").map(Number);
  // 배열에서 최소값 구하기
  const min = Math.min(...arr);
  // 배열에서 최대값 구하기
  const max = Math.max(...arr);
  // 최소값과 최대값을 문자열로 만들어 반환하기
  return `${min} ${max}`;
}

console.log(solution("1 2 3 4"));
