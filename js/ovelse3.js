// Generer et tilfældigt tal mellem 0 og 10
let randomTal = Math.floor(Math.random() * 11);
let antalGaet = 0;

const knap = document.querySelector("#knap");
const besked = document.querySelector("#besked");

knap.addEventListener("click", tjekTal);

function tjekTal() {
  const userInput = document.querySelector("#tal").value;
  antalGaet++;

  if (userInput == randomTal) {
    besked.textContent = `${userInput} er rigtigt! Du brugte ${antalGaet} forsøg. Spillet starter forfra`;
    // nulstil
    randomTal = Math.floor(Math.random() * 11);
    antalGaet = 0;
  } else if (userInput < randomTal) {
    besked.textContent = `Øv! ${userInput} var for lavt. Prøv igen`;
  } else {
    besked.textContent = `Øv! ${userInput} var for højt. Prøv igen`;
  }
}
