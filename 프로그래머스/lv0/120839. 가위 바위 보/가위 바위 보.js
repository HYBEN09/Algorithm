function solution(rsp) {
   const winCases = {
    2: 0, 
    0: 5, 
    5: 2, 
  };
    
    return [...rsp].map(x => winCases[x]).join('')
    
    
}