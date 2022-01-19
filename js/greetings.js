const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 String은 상수로
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){ // submit 이벤트 후엔 자동으로 값을 넘겨준다
    event.preventDefault(); // 이벤트 진행을 막는다. 자동 새로고침 안됨.
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY,inputUsername);

    loginForm.classList.add("hidden");
    paintGreetings(inputUsername);
    
}

function paintGreetings(username){
    greeting.innerText = `${username}さん、こんにちは!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null ){ // username이 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    console.log("username이 없다");
}else{ // 이미 username이 있으면
    loginForm.classList.add(HIDDEN_CLASSNAME); // username을 입력받을 필요 없으니 hidden한다.
    paintGreetings(savedUsername);
    console.log("username이 있다");
}

loginForm.addEventListener("submit", onLoginSubmit); // 엔터나 버튼시 동작 -> 자동 새로고침



