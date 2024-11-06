const container = document.getElementById("button-container");
const rowInput = document.getElementById("rows");
const colInput = document.getElementById("columns");
const error = document.getElementById("error");
const selectDif = document.getElementById("customDifBtn");
const numIntentos = document.getElementById("intentos");
const numParejas = document.getElementById("parejas");
const msgTry = document.getElementById("msgTry");
const btnContainer= document.getElementById("button-container");
let btnPair1;
let btnPair2;
let numTry = 0;
let numOfPairs;
let difficulty = "easy";
let row = 3;
let column = 4;
let pairOne = 0;
let pairTwo = 0;
let checking = false;
//Mensaje de acierto
const accertMsg = () => {
  msgTry.innerText = "Los números seleccionados son iguales";
};
//Mensaje de fallo
const failMsg = () => {
  msgTry.innerText = "Los números seleccionados son distintos";
};
//Metodo para crear los botones
function createButtons(rows, cols) {
  btnContainer.style.gridTemplateColumns = 'repeat(' + column + ', 1fr)';
  let contId = 0;
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const button = document.createElement("button");
      button.id = contId++;
      button.classList.add("button");
      button.addEventListener("click", handleButtonClick);
      container.appendChild(button);
    }
  }
  initInputText();
  numTry = 0;
  numIntentos.innerText = numTry;
}
//Metodo para comprobar que las parejas son correctas o no
const checkPairs = () => {
  numTry++;
  numIntentos.innerText = numTry;
  if (pairOne === pairTwo) {
    btnPair1.disabled = true;
    btnPair2.disabled = true;
    btnPair1.classList.toggle("button-active");
    btnPair2.classList.toggle("button-active");
    btnPair1.textContent = btnPair1.target;
    btnPair2.textContent = btnPair2.target;
    numOfPairs--;
    numParejas.innerText = numOfPairs;
    pairOne = 0;
    pairTwo = 0;
    accertMsg();
    setTimeout(() => {
      msgTry.innerText = "";
      checking = false;
    }, 1000);
  } else {
    failMsg();
    btnPair1.classList.toggle("button-active-fail");
    btnPair2.classList.toggle("button-active-fail");
    setTimeout(() => {
      msgTry.innerText = "";
      btnPair1.textContent = "";
      btnPair2.textContent = "";
      pairOne = 0;
      pairTwo = 0;
      checking = false;
      btnPair1.classList.remove("button-active-fail");
      btnPair2.classList.remove("button-active-fail");
    }, 1000);
  }
};
//Metodo para crear las parejas que van a ser comprobadas
const handleButtonClick = (event) => {
  //chekea para que no se pueda clicar mientras estan los 2 botones activos
  if (checking) {
    return;
  }
  const button = event.target;
  button.classList.remove("button:hover");
  if (pairTwo === 0 && pairOne != 0 && button !== btnPair1) {
    pairTwo = parseInt(button.target);
    btnPair2 = button;
    btnPair2.textContent = button.target;
  }

  if (pairOne === 0) {
    pairOne = parseInt(button.target);
    btnPair1 = button;
    btnPair1.textContent = button.target;
  }

  if (pairOne != 0 && pairTwo != 0) {
    checking = true;
    checkPairs();
  }
};
//Inicializa el texto de los input
const initInputText = () => {
  rowInput.value = row;
  colInput.value = column;
};
//Cambia el texto de los input
const changeInputText = () => {
  row = rowInput.value;
  column = colInput.value;
};
//Crea los botones
createButtons(row, column);
//Escucha al bottón de seleccionar dificultad por si es pulsado y la cambia.
selectDif.addEventListener("click", () => {
  error.textContent = "";
  if (difficulty === "custom") {
    checkCustom();
  } else {
    changeInputText();
    checkDifficulty();
    createButtons(row, column);
    setPairsToButtons();
  }
});
//Comprueba que la dificultad custom es par y le asigna las parejas
const checkCustom = () => {
  if (
    (rowInput.value * colInput.value) % 2 === 0 &&
    rowInput.value > 0 && colInput.value > 0 
  ) {
    changeInputText();
    createButtons(row, column);
    setPairsToButtons();
  } else {
    error.textContent = "Tiene que ser un número par";
  }
};
//Cuando cambias de dificultad en el radiobutton, comprueba en cual está para asignar el número a los inputs y habilitarlos o no.
const checkDifficulty = () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      error.textContent = "";
      difficulty = event.target.value;
      switch (difficulty) {
        case "easy":
          rowInput.value = 3;
          colInput.value = 4;
          changeInputText();
          disabledInputs();
          break;
        case "medium":
          rowInput.value = 4;
          colInput.value = 5;
          changeInputText();
          disabledInputs();
          break;
        case "hard":
          rowInput.value = 6;
          colInput.value = 6;
          changeInputText();
          disabledInputs();
          break;
        case "custom":
          enableInputs();
          break;
      }
    });
  });
};
//Metodo para habilitar los inputs para la dificultad custom
const enableInputs = () => {
  rowInput.disabled = false;
  colInput.disabled = false;
};
//Método para desabilitar los inputs de la dificultad custom
const disabledInputs = () => {
  rowInput.disabled = true;
  colInput.disabled = true;
};
//Compruebo la dificultad antes de empezar
checkDifficulty();
//Genera las parejas y le hace un shuffle al array para que se asignes aleatoriamente
const generatePairs = () => {
  const pairs = (row * column) / 2;
  numOfPairs = pairs;
  numParejas.innerText = pairs;
  const numbers = [];

  for (let i = 1; i <= pairs; i++) {
    numbers.push(i, i);
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
};
//Asigna las parejas de números a los botones
const setPairsToButtons = () => {
  let nums = generatePairs();
  const buttons = document.querySelectorAll("button:not(#customDifBtn)");
  let cont = 0;
  buttons.forEach((button) => {
    button.target = nums[cont];
    cont++;
  });
};
setPairsToButtons();
