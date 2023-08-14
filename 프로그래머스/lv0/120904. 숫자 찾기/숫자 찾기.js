function solution(num, k) {
  const numStr = num.toString()  // 정수를 문자열로 변환
  const kStr = k.toString()
  
  for(let i = 0; i<numStr.length; i++){
       if (numStr[i] === kStr) {
       return i + 1;
       }
  }
    return -1 // k를 찾지 못한 경우
}