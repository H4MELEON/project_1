let menuItem = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu");
menu.insertBefore(menuItem[2], menuItem[1]);

let menuItem5 = document.createElement("li");
menu.appendChild(menuItem5);
menuItem5.classList.add("menu-item");
menuItem5.textContent = "Пятый пункт";

let body = document.querySelector("body");
body.style.background = 'url(./img/apple_true.jpg) center no-repeat';

document.getElementById("title").textContent = 'Мы продаем только подлинную технику Apple';
document.getElementById("title").style.fontSize = '10rem';

document.querySelector(".adv").remove();

let answer = prompt("Каково ваше отношение к технике Apple?");
document.getElementById("prompt").textContent = answer;