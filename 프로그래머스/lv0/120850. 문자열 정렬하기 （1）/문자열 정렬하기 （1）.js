function solution(my_string) {
  // 숫자만 추출
  const numberList = my_string.match(/\d/g);

  // map(Number) 메서드를 사용하여 배열의 각 원소를 숫자로 변환 -> 오름차순 정렬
  const sortedList = numberList.map(Number).sort((a, b) => a - b);

  return sortedList;
}