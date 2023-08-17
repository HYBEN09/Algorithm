function solution(order) {
  const count = String(order).match(/[369]/g)?.length || 0;
  return count;
}
