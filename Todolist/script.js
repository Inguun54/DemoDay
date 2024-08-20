let button = document.getElementById("button");
const input = document.getElementById("Sam");
const container = document.getElementById("blueContainer");

button.addEventListener("click", function() {

  if (input.value === "") {
    alert("Input cannot be empty");
    return; 
  }
  
  let clicked = document.createElement("div");
  const todo = document.createElement("div");
  todo.innerHTML = input.value;
  clicked.appendChild(todo);
  input.value = ""; 
  clicked.className = "task";

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "rmButton";
  removeButton.addEventListener("click", function() {
    container.removeChild(clicked);
  });
  clicked.appendChild(removeButton);

  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "eButton";
  editButton.addEventListener("click", function() {
    editButton.style.display = "none";
    const editInput = document.createElement("input");
    editInput.className = "Edit";
    editInput.value = todo.innerHTML;
    const doneBtn = document.createElement("button");
    doneBtn.className = "done";
    doneBtn.innerHTML = "Done";
    clicked.appendChild(editInput);
    clicked.appendChild(doneBtn);

    doneBtn.addEventListener("click", function() {
      editInput.remove();
      doneBtn.remove();
      editButton.style.display = "block";
      todo.innerHTML = editInput.value;
    });
  });
  clicked.appendChild(editButton);
  container.appendChild(clicked);
});