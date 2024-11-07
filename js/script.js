const lampadina = document.getElementById("lamp");
// console.log(lampadina);

const lampadinaBtn = document.getElementById("lamp-btn");
// console.log(lampadinaBtn);

lampadinaBtn.addEventListener("click", function() {
    if (lampadina.src.includes("yellow_lamp.png")) {
        // Spegne la lampadina e aggiorna il testo del bottone
        lampadina.src = "./img/white_lamp.png";
        lampadinaBtn.innerHTML = "Accendi";
    } else {
        // Accende la lampadina e aggiorna il testo del bottone
        lampadina.src = "./img/yellow_lamp.png";
        lampadinaBtn.innerHTML = "Spegni";
    }
});