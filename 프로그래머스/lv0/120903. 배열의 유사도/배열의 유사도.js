// function solution(s1, s2) {
//    const result = s1.filter(item => s2.includes(item))
   
//    return result.length
    
// }

function solution(s1, s2) {
  const set1 = new Set(s1); // 배열 s1의 원소를 중복 없이 저장하는 Set 생성
  const set2 = new Set(s2); // 배열 s2의 원소를 중복 없이 저장하는 Set 생성
  let count = 0; // 같은 원소의 개수를 저장할 변수

  for (const item of set1) {
    if (set2.has(item)) {
      count++;
    }
  }

  return count;
}