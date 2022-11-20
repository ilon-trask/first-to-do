const createList = document.querySelector("#create-list");
let lists = document.querySelectorAll(".list");
const createListText = "Додати список";

for (let i = 0; i < lists.length; i++) {
  lists[i].onmouseenter = () => {
    if (!lists[i].className.includes("active-li")) {
      lists[i].classList.add("hover");
    }
  };
  lists[i].onmouseleave = () => {
    if (!lists[i].className.includes("active-li")) {
      lists[i].classList.remove("hover");
    }
  };
}
createList.value = createListText;
createList.addEventListener("focus", () => {
  createList.value = "";
  createList.style.color = "var(--main)";
});
createList.addEventListener("blur", () => {
  createList.style.color = "var(--li-activ)";
  if (createList.value == "") {
    createList.value = createListText;
  }
});

let listsValue = [];
if (localStorage.getItem("list")) {
  listsValue = JSON.parse(localStorage.getItem("list"));
}
createList.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    listsValue.push(createList.value);
    localStorage.setItem("list", JSON.stringify(listsValue));
    getLists();
    createList.value = "";
  }
});
let listArea = document.querySelector(".area");
console.log(listArea);
function getLists() {
  listArea.innerHTML = "";
  for (let i = 0; i < listsValue.length; i++) {
    listArea.innerHTML += `
    <li class="list-item list">${
      JSON.parse(localStorage.getItem("list"))[i]
    }</li>`;
  }
  changeLists();
}
getLists();
let currentList;
function getCurrentList() {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].classList.contains("active-li")) {
      currentList = lists[i];
    }
  }
}
getCurrentList();
function changeLists() {
  lists = document.querySelectorAll(".list");
  for (let i = 0; i < lists.length; i++) {
    lists[i].onclick = () => {
      console.log(lists);
      if (currentList != lists[i]) {
        currentList.classList.remove("active-li");
        currentList.classList.remove("hover");
        lists[i].classList.add("active-li");
        getCurrentList();
        console.log(currentList.textContent);
        document.querySelector(".list-name__name").textContent =
          currentList.textContent;
      }
      renderItems();
    };
  }
}
changeLists();
