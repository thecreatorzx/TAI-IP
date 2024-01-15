const text = document.getElementById("inputBox");
const main = document.querySelector("list");
let list;
let count;
let storedData = {};
const createItem = (value, id) => {
  const item = createElement("div", "item");
  const content = createElement("div", "content");
  const icon = createElement("span", "icon");
  const clear = createElement("div", "delete");
  const textNode = createElement("div", "text");
  textNode.innerHTML = value;
  content.appendChild(icon);
  content.appendChild(textNode);
  content.addEventListener("click", (e) => {
    let putIndex;
    let putData;
    if (e.target.classList.contains("content")) {
      putIndex = e.target.parentElement.lastChild.getAttribute("value");
      putData = e.target.lastChild.innerHTML;
    } else {
      putIndex =
        e.target.parentElement.parentElement.lastChild.getAttribute("value");
      putData = e.target.innerHTML;
    }
    if (list[putIndex].status == "null") {
      list[putIndex].status = "done";
    } else {
      list[putIndex].status = "null";
    }
    updateData(putIndex, {
      id: putIndex,
      task: putData,
      status: list[putIndex].status,
    });
    //  the tick is not working how to make the ticked class
    //  added to the textnode based on the list status after fetching
    if (list[id] == "done") {
      textNode.classList.add("ticked");
    } else {
      textNode.classList.remove("ticked");
    }
    textNode.classList.toggle("ticked");
    if (textNode.classList.contains("ticked")) {
      icon.innerHTML = "&#9996;";
    } else {
      icon.innerHTML = "&#9900;";
    }
  });
  item.appendChild(content);
  item.appendChild(clear);
  clear.addEventListener("click", () => {
    clearItem(item);
  });
  icon.innerHTML = "&#9900;";
  clear.innerHTML = "X";
  clear.setAttribute("value", `${id}`);
  main.appendChild(item);
  text.value = "";
};
const createElement = (type, classtype) => {
  const element = document.createElement(`${type}`);
  element.classList.add(`${classtype}`);
  return element;
};
const clearItem = (e) => {
  main.removeChild(e);
  list = list.filter((item) => {
    if (item.task == e.firstChild.lastChild.innerHTML) {
      removeData(item.id);
    } else {
      return true;
    }
  });
};
const addItem = (value, id) => {
  if (id == 0) {
    return;
  } else if (value) {
    createItem(value, id);
  } else {
    console.log("Empty input field.");
  }
};
text.addEventListener("keypress", (e) => {
  e.key == "Enter" ? appendItem() : null;
});
const appendItem = () => {
  list.push({ id: count, task: `${text.value}`, status: "null" });
  storedData = { id: count, task: `${text.value}`, status: "null" };
  printItem();
  enterData(storedData);
};
const printItem = () => {
  main.innerHTML = "";
  list.forEach((e) => {
    addItem(e.task, e.id);
  });
};
const getData = async () => {
  data = await fetchData();
  list = data;
  if (data[0]) {
    count = list[list.length - 1].id + 1;
    printItem();
  }
  return null;
};

// Local storage

const JsonURL = "http://localhost:3000/list";
const fetchData = async () => {
  const response = await fetch(JsonURL);
  const data = await response.json();
  return data;
};
const enterData = async (list) => {
  const response = await fetch(JsonURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  });
};
const removeData = async (x) => {
  const response = await fetch(`${JsonURL}/${x}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
};
const updateData = async (x, y) => {
  const response = await fetch(`${JsonURL}/${x}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(y),
  });
};
getData();
