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

// const buttonElement = document.querySelector(".btn2");

// buttonElement.addEventListener("click", (event) => {
//   let val;
//   val = event.target;
//   val = event.target.id;
//   val = event.target.className;
//   val = event.target.classList;

//   val = event.type;
//   val = event.clientY; // 윈도우로부터의 거리 좌표
//   val = event.offsetY; // 요소로부터의 거리 좌표

//   console.log(val);
// });

// 이벤트 종류

const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const title = document.querySelector("h2");

// click event
// submitBtn.addEventListener("click", handleEvent);
// submitBtn.addEventListener("dblClick", handleEvent);
// submitBtn.addEventListener("mousedown", handleEvent);
// submitBtn.addEventListener("mouseup", handleEvent);
// submitBtn.addEventListener("mouseenter", handleEvent);
// submitBtn.addEventListener("mouseleave", handleEvent);
// submitBtn.addEventListener("mousemove", handleEvent);

// function handleEvent(e) {
//   e.preventDefault(); // 기본 동작을 방지
//   console.log(`Event Type : ${e.type}`);
//   title.textContent = `MouseX : ${e.offsetX} , MouseY : ${e.offsetY}`;
// }

// form event

const emailInput = document.getElementById("email");

form.addEventListener("submit", handleEvent);
emailInput.addEventListener("keydown", handleEvent);
emailInput.addEventListener("keyup", handleEvent);
emailInput.addEventListener("keypress", handleEvent);
emailInput.addEventListener("focus", handleEvent);
emailInput.addEventListener("blur", handleEvent);
emailInput.addEventListener("cut", handleEvent);
emailInput.addEventListener("paste", handleEvent);
emailInput.addEventListener("input", handleEvent);

function handleEvent(e) {
  if (e.type === "submit") {
    e.preventDefault();
  }

  console.log(`Event Type : ${e.type}`);
  title.textContent = e.target.value;
}
