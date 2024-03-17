document.documentElement.style.cssText = `
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const body = document.querySelector('body');
body.style.cssText = 'background-color: black; display: flex; flex-direction: column; height: 100%; margin: 0; padding: 0; box-sizing: border-box;';

const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 1;'
body.appendChild(container);

for (let i = 0; i < 16; i++) {

  const sixteenCol = document.createElement('div');
  sixteenCol.classList.add('sixteenCol');
  sixteenCol.style.cssText = 'display: flex; flex-direction: row; width: fit-content; background-color: white;'
  container.appendChild(sixteenCol);
  for (let u = 0; u < 16; u++) {
    const sixteenRow = document.createElement('div');
    sixteenRow.classList.add('sixteenRow');
    sixteenRow.style.cssText = 'width: 30px; height: 30px;'
    sixteenCol.appendChild(sixteenRow);
  }

}

let linkit = document.getElementsByClassName("sixteenRow");
for (let i = 0; i < linkit.length; i++) {
  linkit[i].addEventListener("mouseover", function (event) {
    this.style.backgroundColor = "#ffcc00";
  });
}

// var linkit = document.getElementsByClassName("sixteenRow");
// for (var i = 0; i < linkit.length; i++) {
//   linkit[i].addEventListener("mouseout", function (event) {
//     this.style.backgroundColor = "transparent";
//   });
// }

// const grid = document.getElementsByClassName('.sixteenRow');

// grid.forEach((div, index) => {
//   div.addEventListener('mouseenter', () => {
//     toggleClass(grid, index, true)
//   })
//   div.addEventListener('mouseleave', () => {
//     toggleClass(grid, index, false)
//   })
// })

// grid.onmouseover = function () {
//   grid.style.color = 'blue';
// }

// function toggleClass(grid, index, add) {
//   for (let i = 0; i < grid.length; i++) {
//     if (i === index) continue;
//     add ? grid[i].style.cssText.add('red') : grid[i].style.cssText.remove('red');
//   }
// }

// grid.addEventListener('mouseenter', (event) => {
//   grid.style.cssText = 'background-color: blue;'
// })

// grid.addEventListener('mouseleave', (event) => {
//   grid.style.cssText = 'background-color: white;'
// })