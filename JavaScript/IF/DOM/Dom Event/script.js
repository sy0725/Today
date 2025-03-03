// window.onload = function () {
//   // 문서가 load 될 때 함수를 실행
//   let text = document.getElementById("text");

//   // id 가 text 인 요소를 return

//   text.innerText = "HTML 문서 loaded";
// };

// const aElement = document.querySelector("a");
// aElement.addEventListener("click", () => {
//   alert("a element click");
// });

const buttonElement = document.querySelector(".btn2");

buttonElement.addEventListener("click", (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;
  val = event.clientY; // 윈도우로부터의 거리 좌표
  val = event.offsetY; // 요소로부터의 거리 좌표

  console.log(val);
});
