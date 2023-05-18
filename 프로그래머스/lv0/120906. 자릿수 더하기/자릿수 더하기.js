
function solution(n){
    let result = String(n).split('').reduce((sum,cur) => sum + Number(cur), 0)
    return result
}




// 2
function solution(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + solution(Math.floor(n / 10));
}

