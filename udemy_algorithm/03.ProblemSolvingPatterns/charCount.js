// function charCount(str) {
//   // 끝에 반환할 객체 만들기
//   let result = {};
//   // 각 문자에 대해 문자열을 반복합니다...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       // - 문자가 숫자/문자이고 개체의 키인 경우 개수에 1을 더합니다.
//       result[char]++;
//     } else {
//       // - 문자가 숫자/문자이고 객체가 아닌 경우 객체에 추가하고 값을 1로 설정합니다.
//       result[char] = 1;
//     }
//   }
//   // - 문자가 다른 것(공백, 마침표 등)이면 아무것도 하지 마십시오.
//   //마지막에 객체 반환
//   return result;
// }

// * refactor ------------------------------------------------
// function charCount(str) {
//   let obj = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

// * refactor ------------------------------------------------
function charCount(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// console.log(charCount("Your PIN number is 1234!"));

//? charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다
function isAlphaNumber(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(isAlphaNumber("hello"));
