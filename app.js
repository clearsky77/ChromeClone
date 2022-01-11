const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 실행을 막는다. 새로고침 안됨.
    console.log(event);
    // const userName = loginInput.value;
    // console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit); // 엔터나 버튼시 동작 -> 자동 새로고침
