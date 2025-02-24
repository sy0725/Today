let val;
// 함수를 사용해서 변환하기

val = 11;
// number to string
val = String(val);
val = String(8 + 4);

// boolean to string
val = false;
val = String(val);

// Date to String
val = new Date();
val = String(val);

// Array to String
val = [1, 2, 3, 4, 5];
val = String(val);

// toString()
val = (5).toString();

// String to Number
val = "1";
val = Number(val);
val = Number(false);
val = Number(true);
val = Number(null);
val = Number([1, 2, 3]); // NaN

// parseInt - 정수로 반환
val = parseInt("114.001");

// parseFloat - 소수점
val = parseFloat("114.10");

console.log(val);
console.log(typeof val);
console.log(val.length);

// 자동으로 변환
// const val1 = 2;
// const val2 = 3;
// const sum = val1 + val2;

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2; // String 타입으로 값을 변환하였기에 String으로 나온다.
console.log(sum);
console.log(typeof sum);
