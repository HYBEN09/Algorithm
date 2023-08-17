function solution(n) {
    let pizza = 6;
    while (pizza % n !== 0) {
        pizza += 6
    } return pizza / 6
}

// 다른 풀이
function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}
