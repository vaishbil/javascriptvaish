let input = document.getElementById("input");
let button = document.getElementById("btn");
let div = document.getElementById("forList");

button.addEventListener("click", () => {
    let text = input.value;

    // prevent empty tasks
    if (text === "") return;

    // create task
    let li = document.createElement("li");
    li.innerText = text;
    // for marking as completed (line through)
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.backgroundColor = "chocolate";
    delBtn.style.color = "beige";
    delBtn.style.padding = "5px 10px";
    delBtn.style.marginLeft = "10px";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "5px";
    delBtn.style.cursor = "pointer";
    // add delete functionality
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    // append button inside task
    li.appendChild(delBtn);  // means put the button inside the li 

    // add task to list
    div.appendChild(li);

    // clear input
    input.value = "";
});