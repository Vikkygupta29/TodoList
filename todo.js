const textarea = document.getElementById("textarea");
const addtodo = document.getElementById("addtodo");
const todocont = document.getElementsByClassName("todocontainer")[0];

addtodo.addEventListener("click", function () {
  const todotext = textarea.value;
  if (todotext === "") return;
  const todoitem = document.createElement("li");
  todoitem.classList.add("todo-item");

  if (textarea.value.trim() === "") {
    alert("task not be empty");
    return;
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const todospan = document.createElement("span");
  todospan.innerText = todotext;
  todospan.classList.add("todo-item-text");

  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.classList.add("edit-button");
  const textinput = document.createElement("input");
  textinput.type = "text";

  editbtn.addEventListener("click", function () {
    textinput.value = todospan.innerText;
    todoitem.replaceChild(textinput, todospan);
    textinput.focus();
    todospan.innerText = textinput.value;
    textinput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        Save();
      }
    });
  });

  function Save() {
    if (textinput.value.trim() === "") {
      alert("task not be empty");
      todoitem.remove();
    } else {
      todospan.innerText = textinput.value;
      todoitem.replaceChild(todospan, textinput);
    }
  }

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      todospan.style.textDecoration = "line-through";
    } else {
      todospan.style.textDecoration = "none";
    }
  });

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("delete-btn");

  deletebtn.addEventListener("click", function () {
    deletebtn.parentElement.remove();
  });

  todoitem.appendChild(checkbox);
  todoitem.appendChild(todospan);
  todoitem.appendChild(deletebtn);
  todoitem.appendChild(editbtn);

  todocont.appendChild(todoitem);

  textarea.value = "";
});
