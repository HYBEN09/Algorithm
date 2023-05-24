function solution(age) {
   const alphabet = "abcdefghij";
    
   // 알파벳 표현을 저장하는 배열 
   const result = [];
    
    while(age > 0){
        // 주어진 숫자 age를 10으로 나눈 나머지
        const remainder = age % 10;
        
        // 변환된 알파벳을 배열의 앞에 추가하기 위해 
        result.unshift(alphabet[remainder])
        
        // 주어진 숫자를 10으로 나누어 일의 자리 숫자를 없애고, 나머지 숫자에 대해 반복
        age = Math.floor(age / 10)
    }
    
    // 배열 요소를 문자열로 결합하여 최종 결과 반환
    return result.join('')
}