// // 배열을 생성하는 방법

// const number = [1, 2, 3]; // 대괄호 사용
// console.log(number); // (3) [1, 2, 3]  3 은 배열의 길이

// // const moreNumbers = new Array("Hi", "Welcome"); // 원하는 만큼 얼마든지 넣어도 된다.
// // // const moreNumbers = new Array(5); // [empty * 5] 잘 쓰이진 않지만 참고
// // // const moreNumbers = new Array(5, 2); // [5, 2] 잘 쓰이진 않지만 참고
// // console.log(moreNumbers); // ["Hi", "Welcome"]

// // of 메서드 사용
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// // from 메서드
// // const moreNumbers = Array.from(1, 2, 3); // 인수를 여러개 넣으면 안된다.
// // console.log(moreNumbers); // Error

// // 문자열을 분리하고싶다면 사용하는게 좋다. 유용하게 사용한다. split('')
// const moreNumbers = Array.from("Hi!"); // ['H', 'i', '!']
// console.log(moreNumbers); // ['H', 'i', '!']

// // 배열에 무엇을 저장할 수 있는가 ?

// const hobbies = ["cooking", "sport"];
// const personalData = [30, "Max", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   console.log(data); // [1, 1.6] / [-5.4, 2.1]
// }

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints); // 1 /  1.6  / -5.4  / 2.1
//   }
// }

// 배열에 데이터 추가 하는 방법
const hobbies = ["Sports", "Cooking"];
// // 맨뒤에 추가하는 push() 메서드
// hobbies.push("Reading");
// console.log(hobbies);

// // 맨 앞에 추가하는 unshift() 메서드
// hobbies.unshift("Singing");
// console.log(hobbies);

// // 맨 뒤에 삭제하는 pop() 메서드
// // pop 은 삭제한 요소를 반환하기에 그 요소를 변수에 저장하여 사용이 가능
// const popValue = hobbies.pop();
// console.log(hobbies);
// console.log(popValue);

// // 맨 앞에 삭제하는 shift() 메서드
// hobbies.shift();
// console.log(hobbies); //  ['Sports', 'Cooking']

// // 다른위치나 , 조작하는 방법 index이용하기
// hobbies[1] = "Coding"; // 기존에 있던 Cooking을 엎어버림
// console.log(hobbies); //  ['Sports', 'Coding']

// // 요소 사이에 넣는 메서드 splice() 배열로 많은걸 하게만드는 메서드
// hobbies[5] = "Reading"; // ['Sports', 'Coding', 비어 있음 × 3, 'Reading']  잘 사용하지 않는 방식
// console.log(hobbies);

// // 1번째 인덱스부터 , 0개를 지우고 , 1번째 인덱스 자리에 'Good Food'를 넣어라
// hobbies.splice(1, 0, "Good Food"); // ['Sports', 'Good Food', 'Coding', 비어 있음 × 3, 'Reading']

// // 여러개 추가가능
// hobbies.splice(1, 0, "Good Food", "Soccer", "BasketBall"); // ['Sports', 'Good Food', 'Soccer', 'BasketBall', 'Good Food', 'Coding', 비어 있음 × 3, 'Reading']

// // 삭제 방법 0번째 인덱스에서 1개를 지워라, sports가 사라짐
// hobbies.splice(0, 1); // ['Good Food', 'Soccer', 'BasketBall', 'Good Food', 'Coding', 비어 있음 × 3, 'Reading']

// 전체 삭제
// hobbies.splice(0);

// 특정 인덱스 이후 삭제
// hobbies.splice(0, 1);
// // 삭제 후 변수로 할당 가능
// const removedElemets = hobbies.splice(0, 1);
// console.log(removedElemets);

// slice() 삭제 뿐만 아닌 새로운 배열을 복사하는데도 유용하다.
// 복사
// const testResult = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const stroredResults = testResult.slice();
// testResult.pop();
// console.log(stroredResults);
// console.log(testResult, stroredResults);

// 삭제
// 인덱스 0부터 인덱스 2 앞까지 살리고 뒤에 다 잘라라
// const stroredResults = testResult.slice(0, 2); // [1, 5.3]

// 인덱스 2까지 다 잘라라
// const stroredResults = testResult.slice(2); // [[1.5, 10.99, -5, 10]
// console.log(stroredResults);

// 배열을 합치는 concat() 메서드
// const storedResults = testResult.concat([3.99, 2]);
// storedResults.push(1, 2);
// console.log(storedResults);

// // 위치 파악가능한 메서드 indexOf()
// // testResult 안에 1.5를 찾는다. 인덱스 2번에 있다고 알려줌
// // 같은 수가 중복되더라도 앞에 있는 값부터 찾아서 알려준다.
// console.log(testResult.indexOf(1.5)); // 2

// // 오른쪽 부터 시작하려면 사용하는 lastIndexOf()
// console.log(testResult.lastIndexOf(1.5)); // 4

// const personData = [{ name: "Max" }, { name: "Manuel" }];

// // 객체는 참조 값이므로 찾을 수 없고 원시값들만 indexOf, lastIndexOf() 가 가능하다.
// // 다른 방법으로 가능하다.
// console.log(personData.indexOf({ name: "Manuel" })); // -1 = 어떤 요소도 찾지 못했다 를 의미하는 -1

// // 객체를 찾는 방법 find() , findOf()
// // find() 최대 3개 인수를 취한다. 첫번째는 배열의 단일 객체, 이름을 person 으로 명명
// // 두번째 인수는 index, 세번째는 언제나 전체 배열 이름 명명
// // 인수를 사용하지 않는다면 굳이 사용 안해도 상관없다. find는 복사하는게 아니고 값을 갈아 치워버린다.
// const Manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });
// Manuel.name = "SY";
// console.log(Manuel, personData); // {name: 'Manuel'}

// // findIndex()는 인덱스 값만 반환함
// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex); // 0

// // includes() 값을 확인하여 불리언 값으로 알려주는 유용한 메서드
// // 인덱스를 찾지 못할경우 -1 를 반환

// console.log(testResult.includes(10.99));
// console.log(testResult.includes(10.99) !== -1);

// forEach
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for of 로 하는 법
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// forEach for of 의 대체품 골라서 사용이 가능하다.
// prices.forEach((price, index, prices) => {
//   const priceObj = { idx: index, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// 더 간단한 방법 map()
// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = { idx: index, taxAdjustedPrices: price * (1 + tax) };
//   return priceObj;
// });

// console.log(taxAdjustedPrices);

// // 정렬하는 메서드 sort()

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);

// 배열을 뒤집는 reverse()
// console.log(sortedPrices.reverse());

// filter() 로 정렬하기
// 새로운 배열 반환
// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// console.log(filteredArray); // [6.59, 10.99]

// Arrow Function
// 위와 비교했을때 완전히 줄어듦
// const filteredArray = prices.filter((p) => p > 6);

// console.log(filteredArray);

// 중요한 reduce()

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// curIndex, prices 매개변수는 잘 사용하지 않고 앞에 두개가 중요하다
// prevValue = 초깃값, curValue = 현재배열
// 이 경우 처음에 더할 prevValue는 0 이되고 , curValue 는 prices 배열의 첫번째 값 10.99가 된다
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);
// console.log(sum);

// // 나눠주는 메서드 split()  ; 구분으로 나눠진다.
// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// console.log(transformedData); //['new york', '10.99', '2000']

// // 붙혀주는 메서드 join() 공백이있으면 공백만큼 띄어주고 붙혀준다.
// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);

// 배열 구조 분해 할당

const nameData = ["Max", "Schwarz", "Mr", 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName);
console.log(lastName);
console.log(otherInformation);
