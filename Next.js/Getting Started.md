# Getting Started - Installation

### 버전

- Node.js 18.17 이상 버전 지원

# 자동 설치

CRA 패키지를 활용하여 React 애플리케이션을 만드는것을 권장한다.

```jsx
두개 중 편한거 사용

pnpm create next-app@latest

npx create-next-app@latest
```

설치 후 터미널에 명령 프롬프트 표기

```jsx
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

all yes 해주면 된다.
```

# 수동 설치

```jsx
pnpm add ext@latest react@latest react-dom@latest
```

### 명령 스크립트 등록

```jsx
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- dev : 개발 모드로 Next.js 앱을 실행
- build : 프로덕션 용도로 애플리케이션 빌드
- start : 빌드된 Next.js 앱을 프로덕션 서버로 시작
- lint : Next.js 앱에 내장된 ESLint 구성을 설정

### 디렉토리 생성

- Next.js 는 파일 시스템 라우팅 사용
- 파일을 구조화하는 방식이 애플리케이션의 경로를 설정
- 새로운 애플리케이션의 경우 App Router 사용하는것이 좋다. 사용하면 Next.js의 최신 기능을 사용이 가능하다.
- App Router 는 사용자 커뮤니티 피드백 기반으로 개선된 페이지 라우팅 방식
- App Router를 사용하려면 app 디렉토리를 만든 다음 `layout.tsx` 이나 `page.tsx` 파일을 추가
  파일은 사용자가 애플리케이션의 루트 ( / ) 를 방문할 때 렌더링

### 루트 레이아웃

<html>, <body> 요소를 사용해 루트 레이아웃(RootLayout) 컴포넌트 작성

**app/layout.tsx**

```tsx
interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
```

그리고 초기 콘텐츠가 포함된 페이지(Page) 컴포넌트를 작성

**app/page.tsx**

```tsx
function Page() {
  return <h1>안녕! Next.js 😃</h1>;
}

export default Page;
```

<aside>
📌 **알아두면 좋은 정보**

`layout.tsx` 파일을 만드는 것을 잊어도 `next dev` 명령을 개발 서버를 실행할 때 Next.js가 자동으로 루트 레이아웃 파일을 생성

</aside>

### pages 디렉토리 (선택사항)

앱 라우터 대신 페이지 라우터를 사용하려면 프로젝트 루트 위치에 `pages` 디렉토리를 만든 뒤 엔트리 파일을 작성합니다. 이 엔트리 파일이 애플리케이션의 홈 페이지가 된다.

**pages/index.tsx**

```tsx
function Page() {
  return <h1>안녕! Next.js 😃</h1>;
}

export default Page;
```

다음으로 `pages` 디렉토리 안에 `_app.tsx` 파일을 추가하고 글로벌 레이아웃을 정의합니다. 개발에서 필요한 경우 [커스텀 앱](https://nextjs.org/docs/pages/building-your-application/routing/custom-app) 파일을 작성 가능

**pages/\_app.tsx**

```tsx
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
```

마지막으로 `pages` 디렉토리 내부에 `_document.tsx` 파일을 추가해 서버의 초기 응답을 제어합니다. 필요한 경우 [커스텀 도큐멘트](https://nextjs.org/docs/pages/building-your-application/routing/custom-document) 파일 작성에 대해 알아보기

**pages/\_document.tsx**

```tsx
import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
```

[페이지 라우터 사용](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)에 대해 자세히 알아보기

### public 디렉토리 (선택사항)

선택적으로 이미지(images), 폰트(fonts) 등과 같은 정적 자산(static assets)을 저장할 `public` 폴더를 생성할 수 있습니다. 그러면 기본 URL( `/`)에서 시작하는 코드에서 폴더 내부의 파일을 참조 가능

### 개발 서버 실행

```jsx
pnpm dev
```
