function selectedSquareColorInitial() {
  const squareColorDefault = document.getElementsByClassName("color")[0];
  squareColorDefault.classList.add("selected");
  let color = squareColorDefault.attributes[0].value.split(" ", 2)[1];
  const colorEnd = '"' + color + '"';
  return colorEnd;
}

function selectedSquareColor() {
  const square = document.getElementsByClassName("color");

  for (let index = 0; index < square.length; index += 1) {
    return square[index].addEventListener("click", function (event) {
      const selected = document.getElementsByClassName("selected");
      let color = square[index].attributes[0].value.split(" ", 2)[1];

      selected[0].classList.remove("selected");
      square[index].classList.add("selected");
      const colorEnd = '"' + color + '"';
      return colorEnd;
    });
  }
}

function paintSquareColor() {
  const table = document.querySelectorAll("td");
  for (let index = 0; index < table.length; index += 1) {
    table[index].addEventListener("click", function () {
      table[index].style.backgroundColor = selectedSquareColor();
    });
  }
}

function clearSquare() {
  var btnClear = document.getElementById("clear-board");
  btnClear.addEventListener("click", function clickMouseLocation() {
    window.location.reload();
  });
}

window.onload = function () {
  selectedSquareColorInitial();
  selectedSquareColor();
  paintSquareColor();
  clearSquare();
};
