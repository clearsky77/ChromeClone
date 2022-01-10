const title = document.getElementById("title");
console.dir(title); // id가 title인 h1의 내부를 볼 수 있다.
console.log(title.textContent); // id가 title인 h1의 text 내용

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);