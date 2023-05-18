function solution(num_list) {

  return num_list.reduce((count, num) => {
    num % 2 === 0 ? count[0]++ : count[1]++;
    return count;
  }, [0, 0]);
    
}


// 다른 풀이
function solution(num_list) {
    
    let answer = [0,0];

    for(let a of num_list){
        answer[ a % 2 ] += 1
    }

    return answer;
}