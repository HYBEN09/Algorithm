// 두 개의 문자열이 주어졌을 때,
// 두 번째 문자열이 첫 번째 문자열의 문자를 재배열하여 만들어진 것인지 확인하는 함수를 작성하는 문제입니다.
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // 문자가 있으면 증가, 그렇지 않으면 1로 설정
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // 문자를 찾을 수 없거나 문자가 0이면 아나그램이 아닙니다.
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); //* true //* { a: 3, n: 1, g: 1, r: 1, m: 1 }
// validAnagram("rat", "car");  // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

//? simple

function simpleValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let letter of second) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

simpleValidAnagram("anagram", "nagaram"); // { a: 3, n: 1, g: 1, r: 1, m: 1 }
