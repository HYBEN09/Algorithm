function solution(slice, n) {
    let pizza = n % slice === 0 ? n/slice : Math.floor(n / slice) +1
    return pizza
}