function solution(sides) {
    const [x, y, z] = sides
    
    if(x+y > z && x+z > y && y+z > x){
        return 1 
    }else{
        return 2
    }
}

// 다른풀이
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}