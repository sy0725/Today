// for - 코드 블록을 여러 번 반복

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     console.log("It is 3");
//     continue;
//   }

//   if (i === 5) {
//     console.log("5 Stop the loop");
//     break; //  i가 5일때 반복문을 끊어주는 역할
//   }

//   console.log("Number " + i);
// }

// for/in - 객체의 속성을 따라 반복

// const user = {
//   name: "Jeon",
//   province: "서울",
//   city: "구로",
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// while - 지정된 조건이 true인 동안 코드 블록 반복

// let i = 0;
// while (i < 10) {
//   console.log("Number" + i);
//   i++;
// }

// do/while - 조건이 true 인지 검사하기 전에 코드 블록을 한 번 실행 후 조건이 true 인 동안 루프를 반복

// let i = 0;

// do {
//   console.log("Number" + i);
//   i++;
// } while (i < 10);

// 배열을 Loop로 이용해서 컨트롤하기

const locations = ["서울", "부산", "경기도", "대구"];

// for문
// for (let i = 0; i < locations.length; i++){
//   console.log(locations[i])
// }

// ForEach
locations.forEach(function (locations, index, array) {
  console.log(`${index} : ${locations}`);
  console.log(array);
});

// map
locations.map(function (locations) {
  console.log(locations);
});

//
