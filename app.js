const age = prompt("おいくつですか。"); // prompt는 옛날 방식이라고 한다.
console.log(typeof age, parseInt(age)); // typeof는 타입을 알 수 있다.


const age2 = parseInt(prompt("おいくつですか。"));
console.log(isNaN(age)); // 숫자가 아닌지 반환

if(isNaN(age) || age < 0){
    console.log("数字を入力してください。");
}