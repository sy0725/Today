const num1 = 20;
const num2 = 10;

let val;

// Math Method
val = Math.round(2.4); // 가장 가까운 정수로 반환
val = Math.ceil(2.4); // 올림
val = Math.floor(2.4); // 내림
val = Math.abs(-2); // 절대값을 출력
val = Math.min(2, 3, 4, 5, 6, 7, -1); // 가장 작은 숫자를 출력
val = Math.max(2, 3, 4, 5, 6, 7, 8); // 가장 높은 숫자 출력
val = Math.random(); // 0~1 사이의 숫자를 리턴
val = Math.floor(Math.random() * 20 + 1); // 1 ~ 20까지 랜덤 숫자

console.log(val);
