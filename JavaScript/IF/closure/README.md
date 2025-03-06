## closure

- 다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 엑세스 할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스 할 수 있습니다.

```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable " + outerVariable);
    console.log("Inner Variable " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
```
