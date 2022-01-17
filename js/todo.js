const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    console.log(event);
    console.dir(event.target); // 이러면 내부를 볼 수 있다.
    console.dir(event.target.parentElement); // 이러면 button 내부의 property를 볼 수 있다.
    console.dir(event.target.parentElement.innerText); // 이러면 부모인 li 안의 텍스트 보기 가능.

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
    paintToDo(newTodo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);