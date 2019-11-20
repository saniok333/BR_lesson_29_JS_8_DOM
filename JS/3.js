// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

document.querySelector(".first").classList.toggle("red");
let i = 1;

document.querySelector(".switch").addEventListener("click", switchLight);

function switchLight() {
  if (i % 4 < 2) document.querySelector(".first").classList.toggle("red");
  document.querySelector(".second").classList.toggle("yellow");
  if (i % 4 > 1) document.querySelector(".third").classList.toggle("green");
  i++;
}