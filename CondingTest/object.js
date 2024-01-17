// 객체 생성방법
const obj = {
  name: "sy",
  company: "good",
};

// 추가 하는 방법
// 아래 두가지 방법으로 추가 가능하다. 기억
obj["email"] = "sunyong0725@naver.com";
obj.phone = "01057308888";
console.log(obj);
// {  name: 'sy',  company: 'good',  email: 'sunyong0725@naver.com',  phone: '01057308888'}

// 삭제 방법
// delete 연산자 사용
delete obj.phone;
console.log(obj); // { name: 'sy', company: 'good', email: 'sunyong0725@naver.com' }

// 확인 방법
console.log("email" in obj); // true
console.log("name" in obj); // true

// key 만 확인하는 방법
console.log(Object.keys(obj)); // [ 'name', 'company', 'email' ]

// value 만 확인하는 방법
console.log(Object.values(obj)); // [ 'sy', 'good', 'sunyong0725@naver.com' ]

// entries 전체를 쌍으로  확인하는 방법

console.log(Object.entries(obj));

// 순회하는 방법
// for in

for (const key in obj) {
  console.log(key, obj[key]);
}
// name sy
// company good
// email sunyong0725@naver.com
