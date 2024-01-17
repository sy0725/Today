// const arr1 = new Array();
// const arr2 = [];
// const arr3 = [1, 2, 3, 4, 5];
// const arr4 = new Array(5); // 배열의 길이만큼 만들어 주고싶다면 파라미터에 숫자

// console.log(arr1); // []
// console.log(arr2); // []
// console.log(arr3); // [1, 2, 3, 4, 5]
// console.log(arr4); // [empty * 5]

// const arr5 = new Array(5).fill(5);
// console.log(arr5); // [ 5, 5, 5, 5, 5 ]

// const arr6 = Array.from(Array(5), function (v, k) {
//   return k + 1;
// });
// console.log(arr6);

// const arr = [1, 2, 3, 4, 5, 6];

// arr.length = 10;

// console.log(arr);

// 편리한 함수

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

// 편의성 메서드

// join
// 배열을 없애고 파라미터로 받은 인수로 합쳐줄때 사용
// console.log(arr.join(".")); // 1.2.3.4.5.6

// reverse
// 배열을 반대로 뒤집어진다. 주의해야할 점은 한번 사용하면 원래 있던 배열에도 영향이 간다.
// console.log(arr.reverse()); // [ 6, 5, 4, 3, 2, 1 ]

// concat
// 배열을 합치는 메서드

// console.log(arr.concat(arr2)); // [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// 요소 추가 삭제 메서드

// push , pop  끝의 요소를 추가하는것이 push , 삭제하는것이 Pop

// arr.push(7);
// arr.push(8, 9); // 하나도 추가가 되지만 여러개도 추가가 가능하다.
// console.log(arr); // [  1, 2, 3, 4, 5,  6, 7, 8, 9]

// arr.pop(); // 9 제거
// arr.pop(); // 8 제거
// console.log(arr); //  [ 1, 2, 3, 4,  5, 6, 7]

// shift , unshift 맨 앞에 추가하는것이 unshift , 삭제하는것이 shift

// arr.shift();
// arr.shift();
// console.log(arr); // [ 3, 4, 5, 6 ]

// arr.unshift(1);
// arr.unshift(2);
// console.log(arr); // [ 2, 1, 3, 4, 5, 6 ]

// slice
// 앞에 파라미터는 ~ 부터 , 뒤에 파라미터는 ~ 의 앞에까지 라는 의미
// arr 변수의 인덱스가 2부터 4까지 즉 3까지 잘라라 이런 의미
// 원본 배열 유지
// console.log(arr.slice(2, 4)); // [ 3, 4 ]
// console.log(arr);

// splice
// 원본 배열을 유지하지 않고 삭제
// arr.splice(2, 2); // 인덱스 2부터 2개요소를 삭제한다.
// console.log(arr); // [1, 2, 5, 6]  - 배열 유지 하지 않음

// 배열 순회방법⭐️

// 정석이지만 요즘은 많이 안쓰인다.
// for (let i = 0; i < 5; i += 1) {
//   console.log(arr[i]);
// }

// 더 편한 방법  조금 더 직관적이다.
// for (const item of arr) {
//   console.log(item);
// }

// arr["key"] = "value"; // 배열으 객체이므로 key : value 를 넣을 수가 있다.
// console.log(arr); // [ 1, 2, 3, 4, 5, 6, key: 'value' ]
// console.log(arr.length); // 6  하지만 길이에 영향을 주진 않는다.
// 추천하지 않는 방법. 참고정도
