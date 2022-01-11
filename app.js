const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    console.log(event);
    // const userName = loginInput.value;
    // console.log(userName);
}

function handleLinkClick(event){ // 오브젝트를 넘겨준다.
    event.preventDefault(); // 이벤트 진행을 막는다.
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit); // 엔터나 버튼시 동작 -> 자동 새로고침
link.addEventListener("click",handleLinkClick);



