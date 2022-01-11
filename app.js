const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    const username = loginInput.value;
    console.log(username);

    loginForm.classList.add("hidden");
    greeting.innerText = `${username}さん、こんにちは!`; // 아래와 같다. 백틱.
    // greeting.innerText = username+"さん、こんにちは!";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); // 엔터나 버튼시 동작 -> 자동 새로고침



