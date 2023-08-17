function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function solution(n) {
    let compositeCount = 0;
    for (let i = 4; i <= n; i++) {
        if (countDivisors(i) >= 3) {
            compositeCount++;
        }
    }
    return compositeCount;
}


