
//Add event listener to get input from input field
document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTodoItem(taskText);
            taskInput.value = "";
        }
    });

// Creating task in the list function
    function createTodoItem(taskText) {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        

        const taskElement = document.createElement("span");
        taskElement.innerText = taskText;
        taskElement.style='color:red'
        taskElement.style='background-color: aliceblue'
        
        const completeButton = document.createElement("button");
        completeButton.classList.add("complete-btn");
        completeButton.innerHTML = " &#10003;";
        completeButton.addEventListener("click", function () {
            taskElement.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("trash-btn");
        deleteButton.innerHTML = "Remove &#128465;";
        deleteButton.addEventListener("click", function () {
            todoItem.remove();
        });

        //Using append child to create delete button list items
        todoItem.appendChild(taskElement);
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
        todoList.style='background-color: aqua'
    }
});
