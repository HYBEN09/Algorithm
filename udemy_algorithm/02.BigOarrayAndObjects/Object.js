let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

//그럼 객체들과 따라오는 메소드를 살펴봅시다. key, values, entries는 모두 O(N) 선형 시간

console.log(Object.keys(instructor)); // O(N)
console.log(Object.entries(instructor)); // O(N)
console.log(instructor.hasOwnProperty("firstName")); // O(1)
