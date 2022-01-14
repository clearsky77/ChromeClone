const imgs = ["img_wallpaper1.png","img_wallpaper2.jpg"];


const seletedImg = imgs[Math.floor(Math.random()*(imgs.length))];

const bgImg = document.createElement("img"); // html에 <img> 를 생성한다.
bgImg.src = `img/${seletedImg}`;
document.body.appendChild(bgImg); // html에 얹는다.

console.log(bgImg);
