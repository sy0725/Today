# supabase

### Tabel

Tabel을 생성할때 `Enable Row Level Security(RLS)` 는 선택을 없애는걸 권장하지 않고 혹시나 선택을 없앤다면 프로덕션 환경에선 사용하면 안된다.

기본적으로 id에 primary로 정해여져있는데 `is Identity` 로 지정이 되어있다. 그렇기에 행을 만들때 1씩 증가하기에 식별자로 사용할 수 있다. 특별히 언급하지 않는다.

created_at : 우리가 특별히 언급되지 않으면 현재시간으로 생성, 특별히 언급하지 않는다.

supabase가 좋은 이유는 AI와 강하게 이어져있다.

언어를 이용해서 표를 추가하고 행을 추가하고싶으면 `SQL Editor` 을 누르면 된다.
![Alt text](/Supabase/assets/image.png)

SQL 문을 만들어준다.
맘에 든다면 Accept Chandge

그 이후 table editor로 들어가면 page2가 생성된게 보인다.

## 웹 애플리케이션에 supabase를 통합하는 방법

[https://supabase.com/docs/reference/javascript/typescript-support](타입스크립트설치)

정보는 API Docs에 있다.
![Alt text](/Supabase/assets/image-1.png)

초기화할땐 : introduction

기본적으로

const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzb2xmbHFidHptc2hqd3NhZnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzNzczMTMsImV4cCI6MjAyMDk1MzMxM30.eXmRTbtLGbFcg0zv5KhxmEzoyEoOdr5ZCVg81i-YwCU
key 같은 경우는 비어있다. 어디서 찾을 수 있냐 setting에 들어가서

하나는 anon 가 있고 service key가 있는데 service key는 다할수있고 수퍼계정이라고 보면된다. 절대로 노출되면 안된다. 웹에는 x

그렇기에 anon 웹페이지 안에 넣어도 나쁜짓 못한다.

그렇기에 저기 key같에다가 anoa를 넣어주면된다.

id 가 history 인것을 넣어야하ㅣㄹ텐데 이때 가져오는 코드가 필요한데
API Docs에 해당 테이블 이름에 들어가면 코드가 적혀있다.

![Alt text](/Supabase/assets/image-2.png)

조금 아래로 내리면 해당 row들을 가지고 오늘 코드가 있다

![Alt text](/Supabase/assets/image-3.png)

```ts
let { data: page, error } = await supabase.from("page").select("*");
```

page 안에 있는 모든 컬럼을 가지고온다 라는 읨
