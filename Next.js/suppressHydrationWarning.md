## suppressHydrationWarning

suppressHydrationWarning 속성은 next를 사용하면 사용하게될 속성입니다.

next는 React 기반의 프레임워크로 React 애플리케이션을 빌드하고 SSR, SSG 를 지원합니다.

`suppressHydrationWarning` 속성은 Next.js에서 동적 페이지 전환시 발생 수 있는 `hydration mismatch` 경고를 숨기는데 사용됩니다.

`hydration mismatch` 은 클라이언트에서 렌더링 된 페이지와 서버에서 렌더링된 페이지 간의 차이로 인해 발생하는 경고이다.

React는 초기 서버 렌더링 이후에 클라이언트에서 앱을 `hydrate` 하려고 시도하는데, 이때 초기 서버 렌더링과 클라이언트에서의 렌더링 결과가 일치하지 않으면 경고가 발생한다.

`suppressHydrationWarning` 을 사용하면 경고를 피할 수가 있다.

```js
function RootLayout() {
  return <div suppressHydrationWarning> </div>;
}
```
