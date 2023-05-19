function solution(n) {
   const sqrt = Math.floor(Math.sqrt(n))
   
   return sqrt * sqrt === n ? 1 : 2
}