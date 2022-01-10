const h1 = document.querySelector("div.hello:first-child h1"); // 이렇게도 가능하다.

function handleTitleClick(){
    h1.classList.toggle("clicked"); // 단 한 줄로 해결
}

h1.addEventListener("click", handleTitleClick);
