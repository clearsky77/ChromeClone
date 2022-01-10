const h1 = document.querySelector("div.hello:first-child h1"); // 이렇게도 가능하다.
console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "gray"){
        newColor = "tomato";
    }else{
        newColor = "gray";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
