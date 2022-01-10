

 // CSS형식으로 찾기. .hello라는 class에 h1을 가져온다.
const title = document.querySelector(".hello h1"); // 첫번째 element만 가져온다.
const titleAll = document.querySelectorAll(".hello h1"); // 모든 element를 가져온다.

const titleById = document.querySelector("#titleById");
// const titleById = document.getElementById("titleById"); // 위와 이 라인은 같다. 그러나 getElementById로는 하위의 다른 것을 불러올 수 없다.

// document.getElementById("hello"); // 이 방식은 class name이 hello인 것을 알아서 찾아오지만 헷갈린다.

console.log(title);
console.log(titleAll);
console.log("titleById: "+titleById)