const h1 = document.querySelector("div.hello:first-child h1"); // 이렇게도 가능하다.

function handleTitleClick(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){ // 만약 포함되어있으면
        h1.classList.remove(clickedClass); // 지운다.
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
