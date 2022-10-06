const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
let autoclicker = document.getElementById("autoclicker");

let number = 0;

cookie.onclick = () => {
    number++;
    counter.innerHTML = `Mléčných řezů : ${number}`
} 

