function solution(my_string, n) {
  const result = [...my_string].map(char => char.repeat(n)).join('');
  return result;
}
