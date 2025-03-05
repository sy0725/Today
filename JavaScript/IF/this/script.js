// method this => Object

// const audio = {
//   title: "a",
//   play() {
//     console.log("play this", this);
//   },
// };

// audio.play();
// audio.stop = function () {
//   console.log("stop this", this);
// };

// audio.stop();

// Function this => window

// function playAudio() {
//   console.log(this);
// }
// playAudio();

// // constructor function => {} (빈 객체)
// function Audio(title) {
//   this.title = title;
//   console.log(this);
// }

// const audio = new Audio("a");

// const audio = {
//   title: "audio",
//   categories: ["rock", "pop", "hiphop"],
//   displayCategories() {
//     this.categories.forEach(
//       function (category) {
//         console.log(`title : ${this.title}, category : ${this.category}`);
//       },
//       { title: "audio" }
//     );
//   },
// };

// audio.displayCategories();

// arrow function ==> this 항상 상위스코프의 this를 가르키게 됩니다.
// 객체를 가르키게 되고 이것을 Lexical this 라고 한다.
const audio = {
  title: "audio",
  categories: ["rock", "pop", "hiphop"],
  displayCategories() {
    this.categories.forEach((category) => {
      console.log(this);
    });
  },
};

audio.displayCategories();
