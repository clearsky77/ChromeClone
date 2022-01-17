const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function paintToDo(newTodo){
    const li = document.createElement("li"); // li 엘레먼트를 생성
    const span = document.createElement("span"); // li 엘레먼트를 생성
    li.appendChild(span); // li가 span을 자식으로 둔다.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    const newTodo = toDoInput.value;
    paintToDo(newTodo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);