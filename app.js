const title = document.querySelector("div.hello:first-child h1"); // 이렇게도 가능하다.
console.dir(title);

function handleTitleClick(){
    console.log("クリックしました。");
    title.style.color = "gray";
}

function handleMouseEnter(){
    console.log("마우스가 올라왔다.");
    title.innerText = "마우스가 올라왔다."
}

function handleMouseLeave(){
    console.log("마우스가 내려갔다.");
    title.innerText = "마우스가 내려갔다."
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);