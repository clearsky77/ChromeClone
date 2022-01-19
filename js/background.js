const imgs = ["img_wallpaper1.png", "img_wallpaper2.jpg"];

const selectedImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img"); // html에 <img> 를 생성한다.
// bgImg.src = `img/${seletedImg}`;
// bgImg.class = "back_img";
// document.body.appendChild(bgImg); // html에 얹는다.

document.body.style.backgroundImage = `url('img/${selectedImg}')`;
// document.body.style.backgroundSize = "cover";
console.log(bgImg);
