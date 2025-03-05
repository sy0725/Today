## bind, call, apply

- this를 함수에서 사용하면 window 객체를 사용하게 되는데 window 객체가 아닌 다른 객체를 참조하고 싶으면 사용하는게 `bind(), call(), apply()` 이다.

### call ()

- 함수를 호출하는 메소드 이며 첫 번째 매개변수로 어떠한 것을 전달해주면 호출되는 함수의 this 안에 window 객체가 아닌 전달받은 것을 받게 된다.

###
