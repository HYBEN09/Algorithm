function solution(my_string, letter) {
   // replace() 메서드에 정규표현식과 g 플래그를 사용하여 모든 일치하는 부분을 제거
    const regex = new RegExp(letter, 'g');
    const result = my_string.replace(regex, '');
    return result
}


//다른 풀이
function solution(my_string, letter) {
  const result = my_string.split(letter).join('');
  return result;
}