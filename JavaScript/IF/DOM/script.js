// let val;

// val = document;
// val = document.baseURI; // 웹 페이지 절대 URL 반환
// val = document.head; // head 태그 반환
// val = document.body; // body 태그 반환
// val = document.forms; // form 태그 반환
// val = document.forms[0].id;
// val = document.forms[0].classList;
// val = document.forms[0].className;
// val = document.scripts[0].getAttribute("src"); // script 태그 반환
// console.log(val);

const headerContainer = document.getElementById("header-container");
// headerContainer.style.display = "none";

headerContainer.textContent = "Text Content";
headerContainer.innerText = "innerText";
headerContainer.innerHTML = "<span>Inner HTML</span>";

const items = document.getElementsByClassName("list-group-item");

items[0].style.color = "blue";
items[3].textContent = "high";

let lists = document.getElementsByTagName("li");

lists = Array.from(lists);

lists.forEach((list, index) => {
  list.textContent = `${index}.list`;
});

const liOdd = document.getSelectorAll("li:nth-child(odd)");
console.log(liOdd);
