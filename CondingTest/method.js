// substring

let str = "01057308888";
let str2 = "Jeon sun yong";
let str3 = "I am developer";
let str4 = "orange, apple, banana, orange, grape, orange";
let str5 = "111a222a333a444";
// console.log(str.substring(0, 7)); // 0105730
// console.log(str.substring(3, 5)); // 57
// console.log(str.substring(2)); // 057308888

// console.log(str.slice(4, 9)); // 73088
// console.log(str.slice(2, -1)); // 05730888

// console.log(str2.toLowerCase()); // jeon sun yong
// console.log(str2.toUpperCase()); // JEON SUN YONG

// console.log(str2.indexOf(3)); // -1
// console.log(str2.indexOf("s")); // 5
// console.log(str2.indexOf("yo")); // 9

// console.log(str.includes("88")); // true
// console.log(str.includes("98")); // false

// console.log(str3.replace("I", "He")); // He am developer ?? 말도 안되지 ㅇㅂㅇ ?
// console.log(str3.replace("developer", "happy")); // I am happy
// console.log(str4.replaceAll("orange", "beer")); // beer, apple, banana, beer, grape, beer

// console.log(str.split("")); // ['0', '1', '0', '5','7', '3', '0', '8','8', '8', '8']
// console.log(str4.split(",")); // [ 'orange', ' apple', ' banana', ' orange', ' grape', ' orange' ]
// console.log(str5.split("a")); // [ '111', '222', '333', '444' ]

// console.log(str.repeat(2)); // 0105730888801057308888
// console.log(str5.repeat(12)); // 너무 길다 !

// console.log(str2.charCodeAt(2)); // 74

// let map = new Map();

// map.set(1, "value1");
// map.set(2, "value2");
// map.set(3, "value3");

// console.log(map); // Map(2) { 1 => 'value1', 2 => 'value2' }
// console.log(map.get(2)); // value2
// console.log(map.has(2)); // true
// console.log(map.has(3)); // false
// console.log(map.has(3)); // false
// console.log(map.size); // 2

// let mapp = new Map();

// mapp.set(1, { id: "aaa", password: 2222 });
// mapp.set(2, { id: "bbb", password: 3333 });
// mapp.set(3, { id: "ccc", password: 1111 });

// for (let [key, value] of mapp) {
//   console.log(value.id);
// }
// aaa bbb ccc

// let arr = [...mapp];
// arr.sort((a, b) => {
//   if (a[1].password < b[1].password) {
//     return 1;
//   } else return -1;
// });

// let newMap = new Map(arr);
// console.log(newMap);

// // Map(3) {
// //   2 => { id: 'bbb', password: 3333 },
// //   1 => { id: 'aaa', password: 2222 },
// //   3 => { id: 'ccc', password: 1111 }
// // }

// let set = new Set();

// set.add("value1");
// set.add("value2");

// console.log(set);

let arr = [
  { name: "aaa", number: 1111 },
  { name: "bbb", number: 2222 },
  { name: "ccc", number: 3333 },
];

// arr.forEach((element, index) => {
//   console.log("elemnet", element);
//   console.log("index", index);
// });

// let arr2 = [1, 3, 4, 5, 6, 1, 2, 3, 2, 5, 1, 2, 3];

// arr2.forEach((e, i) => {
//   console.log("e", e);
// });

// let newArr = arr.map((element) => {
//   element.number = element.number * 2;
//   return element;
// });

// console.log(newArr);

// let newArrr = arr.map((element) => {
//   element.name = element.name.toUpperCase();
//   element.number = element.number * 4;

//   return element;
// });

// console.log(newArrr);

// let newFilter = arr.filter((element, index) => {
//   console.log(index);
//   if (element.number > 2000) return true;
//   else return false;
// });

// console.log(newFilter);

let newReduce = arr.reduce((a, b) => {
  return a + b.number;
}, 0);

console.log(newReduce);
