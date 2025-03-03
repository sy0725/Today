let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

console.log("list", list);
console.log("listItem", listItem);

val = list.childNodes; // NodeList 반환, line break 포함 (한 칸 띄는것도 포함)
// val = list.childNodes[1]; // 개별로 반환하기
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeName;
// val = list.childNodes[3].nodeType;
// NodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment Node
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
// val = list.children; // HTML Collection 반환 , line break 포함 X
// val = list.children[1];
// list.children[1].textContent = "Hi"; // Dom 노드에 접근해서 바로 변경

// // First child
// // val = list.firstChild;  list.firstChild === list.childNodes[0]
// val = list.firstElementChild;

// // last Child
// // val = list.lastChild; list.listChild === list.childNodes[list.childNodes.length -1];
// val = list.lastElementChild;

// // child 요소 count
// val = list.childElementCount;

// // parent node 반환
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement; // 두번 올라간거라 div가 나옴

// // next sibling 반환   HTML 구조에서 아래에 있는 마크업이 next
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // previous sibling 반환 HTML 구조에서 위에 있는 마크업이 previous

// val = listItem.previousSibling;

console.log("val", val);

for (let node of list.childNodes) {
  console.log(node);
}

console.log(Array.from(list.childNodes).filter); // 유사 배열 객체를 실제 배열로 만들려면 from 메소드 사용
