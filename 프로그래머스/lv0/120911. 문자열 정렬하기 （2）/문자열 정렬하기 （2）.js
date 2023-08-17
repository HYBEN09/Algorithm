function solution(my_string) {
    const lowercase = my_string.toLowerCase();
    
    return [...lowercase].sort().join('')
}