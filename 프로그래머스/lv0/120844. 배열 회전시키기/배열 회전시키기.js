function solution(numbers, direction) {
    const length = numbers.length;
    const rotated = [...numbers];
    
    if( direction === "left" ){
        const firstEl = rotated.shift()
        rotated.push(firstEl)
    }else if( direction === "right"){
        const lastEl = rotated.pop()
        rotated.unshift(lastEl)
    }
    
    return rotated;
}