let listItems = document.querySelectorAll("li");
listItems.forEach(function (el, index, array) {
  el.style.padding = "35px";
  el.style.border = "2px solid grey";
  el.style.borderRadius = "9px";
  el.style.width = "100px";
  el.style.height = "80vh";
  el.style.textAlign = "center";
  el.style.textTransform = "uppercase";
  el.style.margin = "0 5px";

  el.addEventListener("click", function (e) {
    e.target.style.backgroundColor = runColor();
  });

  array[0].addEventListener("click", function () {
    var audio = new Audio("sounds//do.mp3");
    audio.play();
  });

  array[1].addEventListener("click", function () {
    var audio = new Audio("sounds//re.mp3");
    audio.play();
  });

  array[2].addEventListener("click", function () {
    var audio = new Audio("sounds//mi.mp3");
    audio.play();
  });

  array[3].addEventListener("click", function () {
    var audio = new Audio("sounds//fa.mp3");
    audio.play();
  });

  array[4].addEventListener("click", function () {
    var audio = new Audio("sounds//sol.mp3");
    audio.play();
  });

  array[5].addEventListener("click", function () {
    var audio = new Audio("sounds//lja.mp3");
    audio.play();
  });

  array[6].addEventListener("click", function () {
    var audio = new Audio("sounds//si.mp3");
    audio.play();
  });
});
// ********************************************* add the code if you want it colourful when it's played
// function runColor() {
//   return (
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
//   );
// }
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
