const imageArea = document.getElementById("imageArea");
const button = document.getElementById("button");

const images = [
  "sarry1.jpg",
  "sarry2.jpg",
  "sarry3.jpg",
  "sarry4.jpg",
  "sarry5.jpg",
  "sarry6.jpg",
  "sarry7.jpg",
];

button.onclick = function () {
  const imageNo = Math.floor(Math.random() * images.length);
  imageArea.src = images[imageNo];
};
