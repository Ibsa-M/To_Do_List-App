const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoDate = document.getElementById("todoDate");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearBtn = document.getElementById("clearBtn");

let totalTodos = 0;
let completedTodos = 0;

// Add Todo
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  const dateValue = todoDate.value;

  if (text === "") {
    alert("Please enter a todo!");
    return;
  }
  
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const dateSpan = document.createElement("span");
  dateSpan.textContent = dateValue ||"Has No date";
  dateSpan.classList.add("date");


  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(span);
  li.appendChild(dateSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  totalTodos++;
  updateCounts();

  todoInput.value = "";
  todoDate.value = "";

  // Complete Todo
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");

    if (span.classList.contains("completed")) {
      completedTodos++;
    } else {
      completedTodos--;
    }
    updateCounts();
  });

  // Delete Todo
  deleteBtn.addEventListener("click", () => {
    if (span.classList.contains("completed")) {
      completedTodos--;
    }
    totalTodos--;
    li.remove();
    updateCounts();
  });
});

// Clear All Todos
clearBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
  totalTodos = 0;
  completedTodos = 0;
  updateCounts();
});

function updateCounts() {
  totalCount.textContent = totalTodos;
  completedCount.textContent = completedTodos;
}
