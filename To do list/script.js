let button = document.getElementById("button");
const input = document.getElementById("Sam");
const container = document.getElementById("blueContainer");

button.addEventListener("click", function() {
  let clicked = document.createElement("div");
  const todo = document.createElement("div")
  todo.innerHTML = input.value
  clicked.appendChild(todo)
  input.value = "";
  clicked.className = "task"

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.className ="rmButton"
  
    removeButton.addEventListener("click", function() {
      container.removeChild(clicked);
    });
    clicked.appendChild(removeButton);
    container.appendChild(clicked);

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "eButton"

    editButton.addEventListener("click", function() {
      editButton.style.display = "none"
      const editInput = document.createElement("input");
      editInput.className = "Edit"
      editInput.value = todo.innerHTML
      const doneBtn = document.createElement("button")
      doneBtn.className = "done"
      doneBtn.innerHTML = "done"
      clicked.appendChild(editInput)
      clicked.appendChild(doneBtn)

      doneBtn.addEventListener("click", function(){
        editInput.remove()
        doneBtn.remove()
        editButton.style.display = "block"
        todo.innerHTML = editInput.value
      })
    });
    clicked.appendChild(editButton);
    container.appendChild(clicked);
    
    const date = new Date();
    console.log(date); 
    const format = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    })
  
    const Format = format.format(date);
    console.log(Format);
    
    const contain = document.createComment("div");
    contain.innerHTML = date;
  
    const contain2 =document.createElement("div");
    contain2.innerHTML = Format;
  
    document.body.appendChild(contain);
    document.body.appendChild(contain2);
  });