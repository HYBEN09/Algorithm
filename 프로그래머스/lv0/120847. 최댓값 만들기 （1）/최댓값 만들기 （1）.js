function solution(numbers) {
    
    const sortedNum =  numbers.sort(( a, b )=> b - a)
    
    return maxNum = sortedNum[0] * sortedNum[1]
}