let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

// 배열 앞에 추가를 한다면 O(N) 선형 시간
// let names = ["hyeben", "Michael", "Melissa", "Andrea"];
// 배열 앞에 추가하고 제거하는것은 최대한 피해야함 ➡️ 수천개가 있는 배열이라면 인덱스를 모두 새로 배정해야 하므로
// 무조건 피하라는 말을 하는게 아닙니다. 단지 끝에서 추가하고 제거하는것만큼 효율적이지 않다는 것을 알고계셔야합니다

// 따라서 push와 pop하는 작업이 shift와 unshift 작업보다 빠름. 비어있는 배열일때만 제외
