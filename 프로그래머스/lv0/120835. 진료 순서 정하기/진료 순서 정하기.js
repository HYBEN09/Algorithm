function solution(emergency) {
   const sortedList = emergency.slice().sort((a,b)=>b-a);
    
   const result =   emergency.map(item => sortedList.indexOf(item)+1)
   
   return result
   
   
    
}