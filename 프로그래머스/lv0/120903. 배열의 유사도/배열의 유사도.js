function solution(s1, s2) {
   const result = s1.filter(item => s2.includes(item))
   
   return result.length
    
}