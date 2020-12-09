// Variáveis Globais
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
let colorSelected = '';

// Funções
function createColorPalette(blocks) {
  const colors = ['black', 'blue', 'pink', 'purple'];
  colorSelected = '';

  for (let index = 0; index < colors.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('block', 'color', colors[index]);

    if (index === 0) {
      colorSelected = colors[index];
      colorDiv.classList.add('selected');
    }

    blocks.appendChild(colorDiv);
  }

  return colorSelected;
}

function createColumnPixel(repeatColumn, insertPixel) {
  for (let index = 0; index < repeatColumn; index += 1) {
    const columnPixel = document.createElement('div');
    columnPixel.className = 'pixel block';
    insertPixel.appendChild(columnPixel);
  }
}

function createLinePixel(repeatLine, repeatColumn) {
  for (let index = 0; index < repeatLine; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    pixelBoard.appendChild(linePixel);
    createColumnPixel(repeatColumn, linePixel);
  }
}

function createPixelBoard() {
  for (let index = 0; index < 5; index += 5) {
    createLinePixel(5, 5);
  }
}

createPixelBoard();

// Estrutura
colorSelected = createColorPalette(colorPalette);
// console.log(colorSelected);

colorPalette.addEventListener('click', function (event) {
  const divSelect = event.target;
  const colorDiv = divSelect.classList[2];

  for (let index = 0; index < colorPalette.childNodes.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }

  if (event.target.className) {
    divSelect.classList.add('selected');
    colorSelected = colorDiv;
  }
  // console.log(colorSelected);
});

pixelBoard.addEventListener('click', function (event) {
  const classes = event.target;

  if (classes.className !== 'line-pixel') {
    classes.classList.add(colorSelected);
  }
});
