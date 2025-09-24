const minDrikkevarer = document.querySelector(".drikkevarer");
minDrikkevarer.addEventListener("click", funktionDerAlkoholtjekker);

const nonalcohol = ["fanta", "cola"];

function funktionDerAlkoholtjekker(event) {
  if (nonalcohol.includes(event.target.alt)) {
    console.log("du har klikket på en variant der er alkoholfri");
  } else {
    console.log("du har klikket på en variant der indholder alkohol");
  }
}
