# Data Fetching Patterns and Best Practices.

앞전에 설명했던 [Data fetch](https://github.com/sy0725/Today/blob/main/Next.js/Data%20fetch.md)
와 중복된 내용이있어 새로운 내용들만 설명하겠습니다.

## 스트리밍

스트리밍 , 서스팬스는 클라이언트 UI의 렌더링된 단위를 점진적으로 렌더링하고 증분적으로 스르리밍할 수있게해주는 React의 기능입니다.

서버 컴포넌트와 중첩된 레이아웃을 사용하게 되면 데이터가 필요하지 않은 페이지 일부를 즉시 렌더링하고, 데이터를 가져오는 페이지 일부에는 로딩 상태를 표시할 수 있습니다. 스트리밍을 사용함으로서 전체 페이지가 로드되기를 기다릴 필요없이 사용이 가능합니다.
![Alt text](/Next.js/Best%20Practice/image.png)

## Preloading Data

워터폴을 방지하는 또 다른 방법은 `Preloading Pattern` 을 사용하는 것입니다. 선택적으로 Preload를 통해 병렬 데이터 가져오기 방법이 최적화 되어 있습니다.

Preload를 사용하면 Promise를 Props로 전달할 필요가 없습니다. 사전 로드 함수는 API가 아닌 패턴이라 이름을 변경할 수없습니다.

```ts
import { getItem } from "@/utils/get-item";

export const preload = (id: string) => {
  void getItem(id);
};
export default async function Item({ id }: { id: string }) {
  const result = await getItem(id);
  // ...
}

// import 해오기
import Item, { preload, checkIsAvailable } from "@/components/Item";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  preload(id);
  const isAvailable = await checkIsAvailable();

  return isAvailable ? <Item id={id} /> : null;
}
```

## Cache , server-only 사용, Preload Pattern 사용

캐시 기능 , Preload Pattern , server-only 패키지를 결합하여 앱 전체에서 사용할 수 있는 데이터 가져오기를 사용할 수 있습니다.

```ts
import { cache } from "react";
import "server-only";

export const preload = (id: string) => {
  void getItem(id);
};

export const getItem = cache(async (id: string) => {});
```

데이터를 가져오고 캐시하며 서버에서만 발생하도록 할 수 있습니다.
