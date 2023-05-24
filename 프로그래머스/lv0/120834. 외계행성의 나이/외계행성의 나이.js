function solution(age) {
  const alphabet = "abcdefghij";
  let result = "";

  while (age > 0) {
    const remainder = age % 10;
    result = alphabet[remainder] + result;
    age = Math.floor(age / 10);
  }

  return result;
}

//다른 풀이 -------------------------------------------------

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}