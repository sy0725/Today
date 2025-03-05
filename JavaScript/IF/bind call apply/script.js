// call()

// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Smith",
// };

// // fullName.call(person1);
// fullName.call(person1, "Oslo", "Norway"); // 인수로 받아서 사용도 가능하다.

// apply()

// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Smith",
// };

// fullName.apply(person1, ["Oslo", "Norway"]); // call 과 다른점은 []로 인수를 넣어준다.

// bind()

function func(language) {
  if (language === "kor") {
    console.log(`language : ${this.korGreeting}`);
  } else {
    console.log(`language : ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕",
  engGreeting: "Hello",
};

const boundFunc = func.bind(greeting); // 결합만 시켜주고 변수로 지정하지 않으면 값이 출력되지 않는다.
console.log("eng");
