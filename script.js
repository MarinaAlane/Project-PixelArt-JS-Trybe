window.onload = function () {
  createColorPaletteElements();
  createPixelBoard(5);
  createControls();
  document.querySelector('.color').className += ' selected';
  let colorPallete = document.querySelector('#color-palette');
  colorPallete.addEventListener('click', getPelleteColor);
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
  let clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearPixelBoard);
  let generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', generateNewBoard)
}

function createColorPaletteElements() {
  let colors = ['rgb(0,0,0)', 'rgb(46, 204, 113)', 'rgb(41, 128, 185)', 'rgb(231, 76, 60)'];
  let colorPallete = document.querySelector('#color-palette');
  for (let color of colors) {
    let colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = color;
    colorPallete.appendChild(colorElement);
  }
}

function createPixelBoard(size) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < size; i++) {
    let line = fillLineElements(size);
    pixelBoard.appendChild(line);
  }

}

function createControls() {
  let controlsContainer = document.querySelector('#controls-container');
  let clearButton = document.createElement('button');
  clearButton.innerText = 'Limpar';
  clearButton.id = 'clear-board';
  controlsContainer.appendChild(clearButton);

  let input = document.createElement('input');
  let generateBoardButton = document.createElement('button');
  input.type = 'number';
  input.max = '50';
  input.min = '5';
  input.id = 'board-size';
  generateBoardButton.id = 'generate-board';
  generateBoardButton.innerText = 'VQV';
  controlsContainer.appendChild(input);
  controlsContainer.appendChild(generateBoardButton);
}

function fillLineElements(size) {
  let line = document.createElement('div');
  line.className = 'pixel-board-line';
  for (let i = 0; i < size; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    line.appendChild(pixel);
  }
  return line;
}

function getPelleteColor(event) {
  if (event.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    event.target.className += ' selected';
  }
}

function paintPixel(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}

function clearPixelBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'rgb(255,255,255)';
  }
}

function getBoardSize() {
  let size = document.querySelector('#board-size').value;

  if (size.length === 0) {
    alert('Board inválido!');
    return false;
  }
  return validSize(size);
}

function validSize(size) {
  if (size > 50) {
    size = 50;
  } else if (size < 5) {
    size = 5;
  }
  return size;
}

function generateNewBoard() {
  let size = getBoardSize();
  if (size) {
    boardStruct = document.querySelectorAll('.pixel-board-line');
    for (let element of boardStruct) {
      element.remove();
    }
    createPixelBoard(size);
  }
}
