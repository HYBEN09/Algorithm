function solution(n) {
   const sqrt = Math.floor(Math.sqrt(n))
   
   return sqrt * sqrt === n ? 1 : 2
}

//다른 풀이
function solution(n) {
  const sqrt = Math.sqrt(n);
  
  //Number.isInteger : 제곱근이 정수인지 확인
  return Number.isInteger(sqrt) ? 1 : 2;
}