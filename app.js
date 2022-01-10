const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
    const userName = loginInput.value;
    // if(userName === ""){
    //     alert("이름을 입력하세요.")
    // }else if(userName.length > 15){
    //     alert("이름은 15자 이내로 입력해주세요.") // html에 maxlength="15"를 하면 제한된다.
    // }
    
}

loginButton.addEventListener("click", onLoginBtnClick)

