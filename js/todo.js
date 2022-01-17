const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    
    const newToDo = toDoInput.value;

    console.log(toDoInput.value);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);