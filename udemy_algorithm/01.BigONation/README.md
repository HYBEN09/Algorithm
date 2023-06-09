# 빅오 표기법

## 📌 빅오 표기법의 필요성

빅오는 대략적으로 숫자를 세는 것의 붙인 공식적인 표현.

정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식.

빅오는 어떤 펑션의 입력 값이 늘어나는 것과 펑션 실행 시간이 변하는 관계를 의미.

빅오(Big-O) 표기법은 알고리즘의 시간 복잡도(Time complexity)를 표현하는 방법 중 하나입니다.
시간 복잡도는 알고리즘이 입력 크기에 따라 수행하는 연산 횟수를 나타내며, 이를 표기법으로 나타내는 것은 알고리즘 분석과 설계에 매우 중요합니다.

알고리즘의 시간 복잡도를 분석하면 알고리즘의 성능을 평가할 수 있습니다. 예를 들어, 입력 크기가 작은 경우에는 시간 복잡도가 큰 알고리즘이라도 수행 시간이 빠를 수 있습니다. 그러나 입력 크기가 커질수록 시간 복잡도가 작은 알고리즘이 더욱 효율적인 결과를 낼 수 있습니다.

따라서 빅오 표기법은 알고리즘의 성능을 예측하고, 알고리즘을 분석하고, 비교하는 데 필수적인 도구입니다. 이를 통해 알고리즘을 효율적으로 설계하고, 시간과 공간을 효율적으로 활용할 수 있습니다.

## 📌 빅오 표기법을 간단하게 표현하는 법

    1. O 표기법에서 가장 높은 차수의 항만을 남기기
    빅오 표기법에서 가장 높은 차수의 항만이 시간 복잡도를 결정하는 항입니다. 따라서 가장 높은 차수의 항만을 표기하는 것으로 충분합니다. 예를 들어, O(n^3 + n^2 + n)은 O(n^3)으로 간단히 표현할 수 있습니다.

    2. 상수항 제거하기
    빅오 표기법에서는 상수항을 무시합니다. 따라서 O(3n)은 O(n)으로 표기할 수 있습니다.

    3. 최악의 경우 시간 복잡도 표기하기
    알고리즘의 시간 복잡도는 최악의 경우를 기준으로 합니다. 따라서 O(n)은 최악의 경우 n번의 연산이 수행되는 알고리즘을 나타냅니다.

    즉, O 표기법에서는 가장 높은 차수의 항만을 고려하며, 상수항은 무시합니다. 따라서 다항식의 경우 가장 높은 차수의 항만을 남기고 상수항을 제거하여 표기합니다. 예를 들어, O(n^3 + 5n^2 + 100n)은 O(n^3)으로 표기할 수 있습니다.

    또한, O 표기법에서는 최악의 경우 시간 복잡도를 기준으로 합니다. 따라서 알고리즘의 시간 복잡도는 최악의 경우를 기준으로 표기합니다.

## 📌 "시간 복잡성"과 "공간 복잡성"을 정의

시간 복잡성(Time Complexity)은 알고리즘이 문제를 해결하는 데 걸리는 시간의 양을 측정하는 방법입니다. 이는 입력 크기에 따른 알고리즘의 실행 시간을 분석하는 것으로, 일반적으로 연산의 횟수를 기준으로 합니다. 시간 복잡성은 알고리즘이 어떻게 실행되는지에 대한 분석을 통해 도출됩니다.

공간 복잡성(Space Complexity)은 알고리즘이 실행될 때 필요로 하는 메모리의 양을 측정하는 방법입니다. 즉, 알고리즘이 처리하는 데이터의 크기에 따라 필요한 메모리 공간의 양을 분석합니다. 공간 복잡성은 알고리즘이 어떻게 실행되는지, 데이터가 어떻게 처리되는지 등에 대한 분석을 통해 도출됩니다.

시간 복잡성과 공간 복잡성은 모두 알고리즘의 효율성을 측정하는 데 중요한 지표입니다. 일반적으로 알고리즘을 설계할 때, 실행 시간과 메모리 사용량을 최소화하면서 원하는 결과를 얻을 수 있는 알고리즘을 찾는 것이 중요합니다.

## 📌 빅오 표기법을 사용해서 여러가지 알고리즘을 평가

    1. 선형 탐색 알고리즘

    시간 복잡도: O(n)
    배열의 모든 요소를 하나씩 탐색하는 방식으로 구현되어 있으므로, 입력 데이터의 크기에 비례하는 시간이 소요됩니다.

    2. 이진 탐색 알고리즘

    시간 복잡도: O(log n)
    입력 데이터를 반씩 쪼개어 탐색하는 방식으로 구현되어 있으므로, 입력 데이터의 크기가 2배로 증가할 때마다 탐색 시간은 1배로 증가합니다.

    3. 버블 정렬 알고리즘

    시간 복잡도: O(n^2)
    배열의 모든 요소를 비교하여 정렬하는 방식으로 구현되어 있으므로, 입력 데이터의 크기가 n배로 증가할 때, 정렬 시간은 n^2배로 증가합니다.

    4. 퀵 정렬 알고리즘

    시간 복잡도: O(n log n)
    입력 데이터를 반씩 쪼개어 정렬하는 방식으로 구현되어 있으므로, 입력 데이터의 크기가 2배로 증가할 때마다 정렬 시간은 1배로 증가합니다.

이와 같이 빅오 표기법을 사용해서 알고리즘의 시간 복잡도를 평가할 수 있으며, 이를 통해 알고리즘의 효율성을 측정하고, 알고리즘을 개선하는 방법을 찾을 수 있습니다.

## 📌 로그가 무엇인가?

로그는 어떤 수를 다른 수의 지수로 나타낼 때 사용하는 수학적 개념입니다. 예를 들어, 2^3은 2를 3의 지수로 나타낸 것이고, 이때 2를 밑(base)이라고 하고, 3을 지수(exponent)라고 합니다. 로그는 이 지수를 찾는 연산을 의미합니다.

일반적으로 로그는 밑이 어떤 값인지에 따라 다른 값을 가집니다. 자주 사용되는 로그는 자연 로그(natural logarithm)와 밑이 10인 로그(common logarithm)입니다. 자연 로그는 e(자연 상수)를 밑으로 하는 로그를 의미하며, 보통 ln으로 표기합니다. 예를 들어, ln(2)는 e를 밑으로 하는 2의 로그를 의미합니다. 밑이 10인 로그는 보통 log로 표기하며, 예를 들어 log(100)은 10을 밑으로 하는 100의 로그를 의미합니다.

로그는 주로 지수적으로 증가하는 값에 대해 연산을 수행할 때 유용합니다. 예를 들어, 컴퓨터 알고리즘에서 입력 데이터의 크기가 지수적으로 증가할 때, 알고리즘의 실행 시간이 얼마나 증가하는지를 계산하는 데에 로그가 사용됩니다. 또한, 로그는 확률론과 통계학, 정보 이론 등 다양한 분야에서 활용됩니다.

<div>
<img src="./assets/what's a log again.png" width="400" height="400"/>
<img src="./assets/Logarithm Examples.png" width="400" height="400"/>
<img src="./assets/Logarithm Complexity.png" width="400" height="400"/>
</div>

### 참고:

https://rithmschool.github.io/function-timer-demo/
