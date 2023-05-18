function solution(my_string) {
    let splitString = my_string.split("")
    let reverseString = splitString.reverse()
    let joinString = reverseString.join("")
    
    return joinString
}

// 다른 풀이
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}