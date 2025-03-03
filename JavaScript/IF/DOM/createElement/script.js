// element 생성
const li = document.createElement("li");

// class 추가
li.className = "list-group-item";

// id 추가
li.id = "new-item";

// 속성 추가
li.setAttribute("name", "New list item");

// appendChild - 부모요소의 맨 마지막 자식 노드로 붙힌다.
document.querySelector("ul.list-group").appendChild(li);

// Link element 생성
const link = document.createElement("a");

link.className = "alarm-item";
link.innerHTML = '<i class="bi-alarm"></i>';
li.appendChild(link);
