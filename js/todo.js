const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KYE = "todos";

let toDos = [];



function saveToDo(){ // toDos를 저장하기
    localStorage.setItem(TODOS_KYE, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;// 삭제해야할 li
    li.remove(); // 삭제
}

function paintToDo(newTodo){
    const li = document.createElement("li"); // li 엘리먼트를 생성
    const span = document.createElement("span"); // span 엘리먼트를 생성
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo); // 삭제 이벤트를 걸어준다.
    span.innerText = newTodo;
    li.appendChild(span); // li가 span을 자식으로 둔다.
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDo()
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KYE); // 로컬에 저장된 toDos 가져오기

if(savedToDos){ // null이 아니면
    const parsedToDos = JSON.parse(savedToDos); // 로컬에 저장되어 있던 목록을 객체화
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}