let myTodos = [];

const addTodo = document.querySelector(".addBtn");
const todoInput = document.querySelector(".todoInput");

const addTodoItem = (newTodo) => {
  const obj = {
    item: newTodo,
    done: false,
  };
  myTodos = [obj, ...myTodos];
  paintTodos();
};

const paintTodos = () => {
  let taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  let result = "";

  myTodos.forEach((myTodo, index) => {
    result =
      result +
      `
       <div class="eachTask">
            <div class="task">${myTodo.item}</div>
            <button class=${
              myTodo.done == true ? "doneClass doneBtn" : "doneBtn"
            }     onclick="markAsDoneFunc(${index})">${
        myTodo.done ? "Mark As UnDone" : "Mark As Done"
      }</button>
            <button class="deleteBtn"    onclick="deleteItemFunc(${index})">Delete</button>
          </div>
      `;
  });
  taskContainer.innerHTML = result;
};

addTodo.addEventListener("click", (event) => {
  const newTodo = todoInput.value.trim();
  newTodo != "" ? addTodoItem(newTodo) : alert("please enter something");
  todoInput.value = "";
});

const deleteItemFunc = (index) => {
  const newTodos = myTodos.filter((todo, i) => i != index);
  myTodos = [...newTodos];
  paintTodos();
};
const markAsDoneFunc = (index) => {
  myTodos[index].done = !myTodos[index].done;
  console.log(myTodos[index].done);
  paintTodos();
};
