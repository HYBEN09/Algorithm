// function solution(slice, n) {
//     let pizza = n % slice === 0 ? n/slice : Math.floor(n / slice) +1
//     return pizza
// }


// 다른 풀이

function solution(slice, n) {
    return Math.ceil(n / slice)
}