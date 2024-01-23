# Server Action

서버 액션(Server Actions)을 통해 새로운 API 라우트를 설정하지 않고도 서버에서 코드를 실행할 수 있습니다. 서버 액션을 사용하는 방법에 따라 웹 브라우저에서 JavaScript가 비활성화 된 상태에서 작동할 수 있습니다.

## Convention

서버 액션은 React `use server` 를 사용하여 사용이 가능합니다.
파일 상단에 배치하여 함수를 서버 작업으로 표시하거나 별도의 파일 상단에 배치하여 해당 파일의 모든 내보내기를 서버 작업으로 표시 할 수 있다.

## 사용법

서버 컴포넌트는 인라인 , 모듈에서 `use server` 를 사용할 수 있습니다. 인라인에서 사용하라면 함수 본문 안에 `use server`를 추가하면 된다.

```ts
// Server Component에서 사용법
export default function Page() {
  // Server Action
  async function create() {
    'use server'

    // ...
  }

  return (
    // ...
  )
}

// Client Component에서 사용법
'use server'

export async function create() {
  // ...
}
///////////////////////////////////
import { create } from '@/app/actions'

export function Button() {
  return (
    // ...
  )
}

// Client 요소에 전달법
<ClientComponent updateItem={updateItem} />

'use client'

export default function ClientComponent({ updateItem }) {
  return <form action={updateItem}>{/* ... */}</form>
}

// 설정
module.exports = {
  experimental: {
    serverActions: true,
  },
}
```

## 찐 사용법, 작용법

Server action은 form 태그 안에 action 속성을 사용하여 이용할 수 있습니다.

- JavaScript가 아직 로드되지 않았거나 비활성화 된 경우에도 사용이 가능합니다.
- 클라이언트 컴포넌트 안에서 서버 액션은 호출되지 않은 JavaScript가 아직 로드되지 않은 경우에도 클라이언트 하이드레이션의 우선순위를 지정합니다.
- 하이드레이션 후 form을 제출해도 브라우저가 새로 고쳐지지가 않습니다.
- form의 제한이 없어서 이벤트핸들러 , useEffect, 타이브러리 , button도 호출이 가능합니다.
- 서버 액션의 인수와 반환 값은 React에서 직렬화 가능해야합니다.
- 서버 액션은 함수로 어디서든 재사용이 가능합니다.

```ts
export default function Home() {
  async function addTodo(data: FormData) {
    "use server"; // 적음으로서 현제 이 코드는 서버 액션이 된다.
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/"); // <-- 사용해야 새로고침하지 않아도 데이터 업데이트를 바로 확인이 가능하다.
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold mb-4">Todos</h1>
      <ul className="mb-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="h-[48px] border-[1px] border-gray-40 rounded-[4px] px-[16px] outline-none placeholder:text-gray-60 placeholder:text-[14px]"
        />
        <button
          type="submit"
          className="bg-[#00CCAA] text-white rounded-[6px] px-4 py-3"
        >
          Add Todo
        </button>
      </form>
    </main>
  );
}
```
