//? 코드 시간 재기

// Slower -----------------------------------------------------
function addUpToSlow(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpToSlow(100000000);

let t2 = performance.now();
console.log(`타임: ${(t2 - t1) / 1000} 초`); //타임: 0.10087787500023841 초

// Faster -----------------------------------------------------

function addUpToFast(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
addUpToFast(100000000);

let t4 = performance.now();
console.log(`타임: ${(t4 - t3) / 1000} 초`); //타임: 0.000007624998688697815 초
