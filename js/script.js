const container = document.getElementById("button-container");
let difficulty = "easy";
let row = 3;
let column = 4;
const selectDif = document.getElementById("customDifBtn");

function createButtons(rows, cols) {
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const button = document.createElement("button");
      button.classList.add("button");
      container.appendChild(button);
    }
  }
}

createButtons(row, column);

selectDif.addEventListener("click", () => {
  checkDifficulty();
  createButtons(row, column);
});
const checkDifficulty = () => {
  console.log("entro");
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      difficulty = event.target.value;
      switch (difficulty) {
        case "easy":
          row = 3;
          column = 4;
          break;
        case "medium":
          row = 4;
          column = 5;
          break;
        case "hard":
          row = 6;
          column = 6;
          break;
      }
    });
  });
};
checkDifficulty();
//TODO Generar parejas de numero según las filas por columnas
const generatePairs = () => {
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    numbers.push(randomNumber, randomNumber);
  }
  return numbers;
};
const randomPairsANum = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const setPairsToButtons = () => {
  let nums = randomPairsANum(generatePairs());
  const buttons = document.querySelectorAll("button:not(#customDifBtn)");
  let cont = 0;
  buttons.forEach((button) => {
    button.textContent = nums[cont];
    cont++;
  });
};

setPairsToButtons();
