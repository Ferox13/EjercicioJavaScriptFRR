const container = document.getElementById("button-container");
const rowInput = document.getElementById("rows");
const colInput = document.getElementById("columns");
const error = document.getElementById("error");
const selectDif = document.getElementById("customDifBtn");

let difficulty = "easy";
let row = 3;
let column = 4;

function createButtons(rows, cols) {
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const button = document.createElement("button");
      button.classList.add("button");
      container.appendChild(button);
    }
  }
  initInputText();
}
const initInputText = () => {
  rowInput.value = row;
  colInput.value = column;
};
const changeInputText = () => {
  row = rowInput.value;
  column = colInput.value;
};

createButtons(row, column);

selectDif.addEventListener("click", () => {
  error.textContent = "";
  if (difficulty === "custom") {
    checkCustom();
  } else {
    changeInputText();
    checkDifficulty();
    createButtons(row, column);
  }
});
const checkCustom = () => {
  if ((rowInput.value * colInput.value) % 2 === 0) {
    changeInputText();
    createButtons(row, column);
  } else {
    error.textContent = "Tiene que ser un número par";
  }
};
const checkDifficulty = () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      difficulty = event.target.value;
      switch (difficulty) {
        case "easy":
          rowInput.value = 3;
          colInput.value = 4;
          changeInputText();
          break;
        case "medium":
          rowInput.value = 4;
          colInput.value = 5;
          changeInputText();
          break;
        case "hard":
          rowInput.value = 6;
          colInput.value = 6;
          changeInputText();
          break;
        case "custom":
          checkCustom();
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
