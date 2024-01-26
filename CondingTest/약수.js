// 모든 수를 나눠서 약수 구하기

// const num = 28; // 약수 찾기 위한 정수 설정
// const result = []; // 넣을 빈 배열
// let index = 1;

// while (index <= num) {
//   if (num % index === 0) {
//     result.push(index);
//   }
//   index++;
// }
// console.log(result);

// 제곱근 사용하기 Math.sqrt()

const num = 100;
const result = [];
let index = 1;

while (index <= Math.sqrt(num)) {
  if (num % index === 0) {
    result.push(index);
    if (num / index !== index) {
      result.push(num / index);
    }
  }
  index++;
}
result.sort((a, b) => a - b);

console.log(result);
