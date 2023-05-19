function solution(cipher, code) {
    // 해독된 암호 문자열을 저장할 변수 result를 빈 문자열로 초기화
    let result = ''
    
    // i 변수를 code - 1로 초기화하고, i를 code씩 증가시키면서 반복
    // 첫 번째 글자를 추출하기 위해서는 인덱스 0을 사용
    for(let i = code - 1; i < cipher.length; i += code){
        result += cipher[i]
    }
    return result
}