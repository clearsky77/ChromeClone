
// 기본 변수
var oldThing = "" // var은 예전에 썼던 것이다. 이제 쓰지 않도록 한다.
const a = 2+3; // constant(상수) 변경되지 않는다.
const myName = "アルニャン";
let youName = "" // let은 변경가능하다.

alert("hi"); // 얼럿
console.log(myName+"がログインしました。"); // 로그
console.log(a*2); // 로그


const amITall = null;
let something; // undefined라고 나온다.
console.log(something);


// 배열 사용하기
const arr = ["nya","ho","ha"];
console.log(arr);
console.log(arr[0]);

arr.push("nyu"); // 추가하기
console.log(arr);

arr.pop(); // 삭제하기
console.log(arr);


// 객체 사용하기
const user = {
    name: "냥냐루",
    age: 6,
    fat: false
};

console.log(user);
console.log(user.fat);

user.age = 7; // const지만 안의 내용 변경은 에러 발생하지 않는다. 전체 바꾸면 에러 발생. player = 7 의 경우 에러 발생.
console.log(user.age);

