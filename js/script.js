const lampadina = document.getElementById("lamp");
// console.log(lampadina);

const lampadinaBtn = document.getElementById("lamp-btn");
// console.log(lampadinaBtn);

lampadinaBtn.addEventListener("click", function() {
    lampadina.src = "./img/yellow_lamp.png";
})