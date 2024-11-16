const images = [
    "ladygaga1.jpeg",
    "ladygaga2.jpeg",
    "ladygaga3.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //prepend를 사용시 body 맨위에 생성