const createItem = document.querySelector("#create-item");
const createItemText = "Додати завдання";
createItem.value = createItemText;
createItem.addEventListener("focus", () => {
  createItem.value = "";
  createItem.style.color = "var(--main)";
});
createItem.addEventListener("blur", () => {
  if (createItem.value == "") {
    createItem.value = createItemText;
    createItem.style.color = "var(--li-activ)";
  }
});
let items = [];

console.log(lists);
if (localStorage.getItem("items")) {
  items = JSON.parse(localStorage.getItem("items"));
}

createItem.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (currentList.textContent == "Важливі") {
      items.unshift({
        name: createItem.value,
        list: currentList.textContent,
        onPage: false,
        imp: true,
        done: false,
      });
    } else {
      items.unshift({
        name: createItem.value,
        list: currentList.textContent,
        onPage: false,
        imp: false,
        done: false,
      });
    }
    localStorage.setItem("items", JSON.stringify(items));
    createItem.value = "";
    renderItems();
  }
});
const justItemsArea = document.querySelector(".items-area"),
  doneItemsArea = document.querySelector(".done-items-area");
function renderItems() {
  justItemsArea.innerHTML = "";
  doneItemsArea.innerHTML = `<p class='done-label'>Виконані</p>`;
  let justCounter = [],
    doneCounter = [];
  for (let i = 0; i < items.length; i++) {
    items[i].onPage = false;
  }
  for (let i = 0; i < items.length; i++) {
    let itemsArea = items[i].done ? doneItemsArea : justItemsArea;
    itemsArea == justItemsArea ? justCounter.push(i) : doneCounter.push(i);
    if (currentList.textContent == "Всі") {
      itemsArea.innerHTML += `
  <div class="work-space__item item ${items[i].done ? "done" : ""}">
  <div class="item-done">
  <div class="checkbox "></div>
  <p>${items[i].name}</p>
  </div><div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="var(--li-active)"
      width="20"
      height="20"class='item-delet'
      >
        <path
        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
      />
      </svg>
      <svg class="imp ${
        items[i].imp ? "active-svg" : ""
      }" fill="var(--bg-color)" width="20" height="20">
        <path
        d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
        stroke=" var(--li-active)"
        ></path>
      </svg>
    </div>
  </div>`;
      items[i].onPage = true;
    } else if (currentList.textContent == "Важливі") {
      if (items[i].imp == true) {
        itemsArea.innerHTML += `
<div class="work-space__item item ${items[i].done ? "done" : ""}">
<div class="item-done">
<div class="checkbox "></div>
<p>${items[i].name}</p>
</div><div>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  fill="var(--li-active)"
  width="20"
  height="20"class='item-delet'
>
  <path
    d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
  />
</svg>
<svg class="imp active-svg" fill="var(--bg-color)" width="20" height="20">
        <path
          d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
          stroke=" var(--li-active)"
        ></path>
      </svg>
      </div>
</div>`;
        items[i].onPage = true;
      }
    } else if (currentList.textContent == items[i].list) {
      itemsArea.innerHTML += `
      <div class="work-space__item item ${items[i].done ? "done" : ""}">
      <div class="item-done">
      <div class="checkbox "></div>
      <p>${items[i].name}</p>
      </div><div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="var(--li-active)"
          width="20"
          height="20"class='item-delet'
          >
            <path
            d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
          />
          </svg>
          <svg class="imp ${
            items[i].imp ? "active-svg" : ""
          }" fill="var(--bg-color)" width="20" height="20">
            <path
            d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
            stroke=" var(--li-active)"
            ></path>
          </svg>
        </div>
      </div>`;
    }
  }
  localStorage.setItem("items", JSON.stringify(items));
  let mainCounter = [...justCounter, ...doneCounter];

  impToggle(mainCounter);
  oncDone(mainCounter);
  oncDelet(mainCounter);
}
renderItems();

function oncDone(counter) {
  const itemDone = document.querySelectorAll(".item-done");
  for (let i = 0; i < itemDone.length; i++) {
    let j = counter[i];
    itemDone[i].onclick = () => {
      items[j].done ? (items[j].done = false) : (items[j].done = true);
      localStorage.setItem("items", JSON.stringify(items));
      renderItems();
    };
  }
}
function impToggle(counter) {
  let imp = document.querySelectorAll(".imp");
  for (let i = 0; i < imp.length; i++) {
    let j = counter[i];
    console.log(j);
    imp[i].onclick = () => {
      imp[i].classList.toggle("active-svg");
      if (imp.length < items.length) {
        if (imp[i].classList.contains("active-svg")) {
          console.log(j);
          items[j].imp = true;
        } else {
          console.log(j);
          items[j].imp = false;
          console.log(34);
        }
      } else {
        if (imp[i].classList.contains("active-svg")) {
          items[j].imp = true;
        } else {
          items[j].imp = false;
          console.log(34);
        }
      }
      console.log(items);
      localStorage.setItem("items", JSON.stringify(items));
      console.log(imp[i].classList.contains("active-svg"));
    };
  }
}
function oncDelet(counter) {
  const itemDone = document.querySelectorAll(".item-delet");

  for (let i = 0; i < itemDone.length; i++) {
    let j = counter[i];
    itemDone[i].onclick = () => {
      items.splice(j, 1);
      console.log(i);
      localStorage.setItem("items", JSON.stringify(items));
      renderItems();
    };
  }
}
function menuToggle() {
  const menuBtn = document.querySelectorAll(".menu"),
    linkArea = document.querySelector("nav");
  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].onclick = () => {
      if (linkArea.style.display === "none") {
        linkArea.style.display = "block";
      } else {
        linkArea.style.display = "none";
      }
      if (menuBtn[1].style.display === "none") {
        menuBtn[1].style.display = "";
      } else {
        menuBtn[1].style.display = "none";
      }
    };
  }
  menuBtn[1].style.display = "none";
  console.log(menuBtn);
}
menuToggle();
