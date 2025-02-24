// var === 함수 레벨 스코프
// function func() {
//   if (true) {
//     var a = "a";
//     console.log(a);
//   }
//   console.log(a);
// }

// func();
// console.log(a);

// let , const === 블록 레벨 스코프

function func() {
  if (true) {
    let a = "a";
    console.log(a);
    const b = "b";
    console.log(b);
  }
  console.log(a); // if문에 참조하지 않기에 출력 에러
  console.log(b); // Error
}

func();
