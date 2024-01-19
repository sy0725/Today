# for 문

`for` 반복문은 `while` 보다 복잡하지만 가장 많이 쓰이는 반복문이다.

```js
for (begin; condtion; step) {
  // 반복문 본문
}
```

for문을 구성하는 각 요소가 무엇을 의미하는지 확인하겠습니다.

아래 반복문은 i 가 3이 될 때까지 (3은 포함지 않음) console.log(i) 가 호출된다.

```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 , 1, 2
}
```

하나하나 확인을 해보겠습니다.

- `begin` : i = 0 // 반복문 진입할때 한번 실행된다.
- `condition` : i < 3 // 반복마다 해당 조건이 확인, false면 반복문을 멈춘다.
- `body` : console.log(i) // condition 이 truthy일 동안 계속에서 실행
- `step` : i++ // 각 반복의 body가 실행된 이후에 실행

`반복문 알고리즘`

```txt
begin을 실행함
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ ...
```

# map , fill , forEach
