const h1 = document.querySelector("div.hello:first-child h1"); // 이렇게도 가능하다.
console.dir(h1);

function handleTitleClick(){
    console.log("クリックしました。");
    h1.style.color = "gray";
}

function handleMouseEnter(){
    console.log("마우스가 올라왔다.");
    h1.innerText = "마우스가 올라왔다."
}

function handleMouseLeave(){
    console.log("마우스가 내려갔다.");
    h1.innerText = "마우스가 내려갔다."
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);




// window 이벤트

function handleWindowResize(){ // 리사이징 이벤트
    document.body.style.backgroundColor = "lemonchiffon";
}

function handleWindowCopy(){ // 복사 이벤트
    alert("Copied!");
}

function handleWindowOffline(){ // wifi 연결 확인 이벤트
    alert("OMG no Wifi XO")
}

function handleWindowOnline(){ // wifi 연결 확인 이벤트
    alert("Wow, we are online!")
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

