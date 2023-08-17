function solution(box, n) {
  const maxFitX = Math.floor(box[0] / n);
  const maxFitY = Math.floor(box[1] / n);
  const maxFitZ = Math.floor(box[2] / n);
  
  return maxFitX * maxFitY * maxFitZ;
}