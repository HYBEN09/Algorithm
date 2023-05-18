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