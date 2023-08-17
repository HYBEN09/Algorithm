function solution(my_string) {
 
const result = [...my_string].map(x=>(
x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
)).join('')
    
      return result
}




