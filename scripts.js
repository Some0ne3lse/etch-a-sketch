document.documentElement.style.cssText = `
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

let gridDimensions = 16;

const body = document.querySelector('body');
body.style.cssText = 'background-color: black; display: flex; flex-direction: column; height: 100%; margin: 0; padding: 0; box-sizing: border-box; align-items: center;';


const newButton = document.createElement('button');
newButton.textContent = 'Change grid!';
newButton.classList.add('changeGrid')
newButton.style.cssText = 'width: 100px; margin-top: 100px; margin-bottom: 100px;';
body.appendChild(newButton);

// const theButton = document.querySelector('.changeGrid');
// theButton.addEventListener(onclick, changeDimensions);

function changeDimensions() {
  alert('Test')
  // let myDialog = document.createElement('dialog');
  // let text = document.createTextNode('Please enter the dimensions you want (MAX 100)');
  // myDialog.appendChild(text);
  // myDialog.showModal;
}

newButton.onclick = changeDimensions;


const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; width: 660px; height: 660px;'
body.appendChild(container);

for (let i = 0; i < gridDimensions; i++) {

  const sixteenCol = document.createElement('div');
  sixteenCol.classList.add('sixteenCol');
  sixteenCol.style.cssText = 'display: flex; flex-direction: row; width: fit-content; background-color: white; height:100%; width: 100%;'
  container.appendChild(sixteenCol);
  for (let u = 0; u < gridDimensions; u++) {
    const sixteenRow = document.createElement('div');
    sixteenRow.classList.add('sixteenRow');
    sixteenRow.style.cssText = 'display: flex; flex-direction: column; flex: auto; height: 100%; width: 100%'
    sixteenCol.appendChild(sixteenRow);
  }

}

let linkit = document.getElementsByClassName("sixteenRow");
for (let i = 0; i < linkit.length; i++) {
  linkit[i].addEventListener("mouseover", function (event) {
    this.style.backgroundColor = "#ffcc00";
  });
}