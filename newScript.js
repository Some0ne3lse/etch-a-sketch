document.documentElement.style.cssText = 'height: 100%; margin: 0; padding: 0; box-sizing: border-box; background-color: black;';

let gridDimensions;

let toggleButton = true;

const body = document.querySelector('body');
body.style.cssText = 'display: flex; flex-direction: column; height: 100%; margin: 0; padding: 0; box-sizing: border-box; align-items: center;display: flex; flex-direction: column; height: 100%; margin: 0; padding: 0; box-sizing: border-box; align-items: center;';

const newButton = document.createElement('button');
newButton.textContent = 'Change grid!';
newButton.classList.add('changeGrid')
newButton.style.cssText = 'width: 100px; margin-top: 100px; margin-bottom: 25px;';
body.appendChild(newButton);

const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'Rainbows!!';
rainbowButton.classList.add('rainbowButton')
rainbowButton.style.cssText = 'width: 100px; margin-top: 25px; margin-bottom: 25px;';
body.appendChild(rainbowButton);

function changeDimensions(gridDimensions) {
  let newDimension = prompt('Please enter new number no higher than 100');
  if (newDimension != null && newDimension <= 100 && newDimension > 0) {
    gridDimensions = newDimension;
    console.log(gridDimensions)
    createGrid(gridDimensions);
  } else {
    alert('Not a valid option!')
  }
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

newButton.onclick = changeDimensions;
rainbowButton.onclick = function () {
  if (toggleButton == true) {
    toggleButton = false;
  } else {
    toggleButton = true;
  }
}

const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; width: 660px; height: 660px;'
body.appendChild(container);

for (let i = 0; i < 16; i++) {
  const initialCol = document.createElement('div');
  initialCol.classList.add('sixteenCol');
  initialCol.style.cssText = 'display: flex; flex-direction: row; width: fit-content; background-color: white; height:100%; width: 100%;';
  container.appendChild(initialCol);
  for (let u = 0; u < 16; u++) {
    const initialRow = document.createElement('div');
    initialRow.classList.add('sixteenRow');
    initialRow.style.cssText = 'display: flex; flex-direction: column; flex: auto; height: 100%; width: 100%;';
    initialCol.appendChild(initialRow);
  }
}

function createGrid(gridDimensions) {
  while (container.firstChild) container.removeChild(container.firstChild);
  for (let i = 0; i < gridDimensions; i++) {
    const sixteenCol = document.createElement('div');
    sixteenCol.classList.add('sixteenCol');
    sixteenCol.style.cssText = 'display: flex; flex-direction: row; width: fit-content; background-color: white; height:100%; width: 100%;';
    container.appendChild(sixteenCol);
    for (let u = 0; u < gridDimensions; u++) {
      const sixteenRow = document.createElement('div');
      sixteenRow.classList.add('sixteenRow');
      sixteenRow.style.cssText = 'display: flex; flex-direction: column; flex: auto; height: 100%; width: 100%;';
      sixteenCol.appendChild(sixteenRow);
    }
  }
  const drawingBox = document.querySelectorAll('.sixteenRow');
  drawingBox.forEach(item => {
    item.addEventListener('mouseover', () => {
      if (toggleButton == true) {
        item.style.backgroundColor = getRandomColor();
      } else {
        item.style.backgroundColor = 'blue';
      }
    })
  })
}

const drawingBox = document.querySelectorAll('.sixteenRow');
drawingBox.forEach(item => {
  item.addEventListener('mouseover', () => {
    if (toggleButton == true) {
      item.style.backgroundColor = getRandomColor();
    } else {
      item.style.backgroundColor = 'blue';
    }
  })
})