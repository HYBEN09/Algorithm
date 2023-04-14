## OBJECTIVES

Big O의 렌즈를 통해 개체 및 배열의 ​​작동 방식 이해
배열 시작 부분에 요소를 추가하는 데 비용이 많이 드는 이유 설명
배열 및 개체의 런타임과 기본 제공 메서드를 비교하고 대조합니다.

### Big O of Objects

Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(1)

### Big O of Object Methods

Object.keys - O(N)

Object.values - O(N)

Object.entries - O(N)

hasOwnProperty - O(1)

### Big O of Arrays

Insertion - It depends....

Removal - It depends....

Searching - O(N)

Access - O(1)

### Big O of Array Operations

push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N \* log N)
forEach/map/filter/reduce/etc. - O(N)

즉, 객체는 거의 모든것을 더 빠르게 하지만, 정렬되어 있지 않고

배열은 정렬되어 있지만, 끝에 추가하고 제거하는 작업이 시작에 추가하고 제거하는 작업보다 훨씬 빠르다는 것입니다.

시작에 넣거나 빼면 처음부터 끝까지 영향을 받으면서 전부 인덱스를 다시 정리해야합니다. 중간에 넣거나 빼는것도 똑같습니다.

똑같이 추가하고 제거한 위치에서 뒤로 모두 영향을 받게됩니다.
