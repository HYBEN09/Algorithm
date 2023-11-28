function solution(my_string) {
    var answer = '';
    
    // 중복된 문자를 제거하기 위해 Set을 사용
    const uniqueChars = new Set(my_string);

    // Set을 다시 문자열로 변환
    answer = Array.from(uniqueChars).join('');

    return answer;
}