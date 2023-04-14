// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  //한잔에 5,500
  const price = 5500;

  // 최대로 마실 수 있는 아메리카노의 잔 수
  const count = Math.floor(money / price);

  // 남는 돈
  const extraMoney = money % price;

  //남는 돈을 순서대로 담은 배열을 return
  return [count, extraMoney];
}

console.log(solution(14000));
