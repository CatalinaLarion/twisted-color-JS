const colors = [
  "aqua",
  "beige",
  "rgba(203,322,200)",
  "#f19025",
  "coral",
  "#FFD700",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // console.log(document.body);
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
