function solution(hp) {
  const generalAnts = Math.floor(hp / 5);  // 장군개미의 수
  const soldierAnts = Math.floor((hp % 5) / 3);  // 병정개미의 수
  const workerAnts = (hp % 5) % 3;  // 일개미의 수
  
  const totalAnts = generalAnts + soldierAnts + workerAnts;  // 총 개미의 수
  
  return totalAnts;
}