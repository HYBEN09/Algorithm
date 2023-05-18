function solution(my_string) {
    let splitString = my_string.split("")
    let reverseString = splitString.reverse()
    let joinString = reverseString.join("")
    
    return joinString
}