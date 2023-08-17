
function solution(num, k) {
    const numStr = num.toString(); // 정수를 문자열로 변환
    const kStr = k.toString();    

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === kStr) {
            return i + 1; // 인덱스는 0부터 시작하므로 +1
        }
    }

    return -1; // k를 찾지 못한 경우
}


// -------------------------------------------------------------------------
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
    
}
