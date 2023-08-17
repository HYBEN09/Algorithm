function solution(my_string, num1, num2) {
    // 각 문자로 분할한 배열 
    const answer = my_string.split('');
    
    // 배열 구조 분해 할당 
    [ answer[num1], answer[num2] ]=[ answer[num2], answer[num1] ]
    
    // 변경된 배열 다시 문자열로 합치기
    return answer.join('')
}