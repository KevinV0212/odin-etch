// node-reference variables
const container = document.querySelector('.container');
const resizeButton = document.querySelector('.resize-button');
const resetButton = document.querySelector('.reset-button');

// creation of wrapper for grid that is 'gridSize' boxes across and 'Grid_Height' px tall/wide
const GRID_HEIGHT = '400px';
let gridSize = 4;

const wrapper = document.createElement('div');
wrapper.style.height = wrapper.style.width = GRID_HEIGHT;
wrapper.classList.add('grid-wrapper');
container.insertBefore(wrapper, resetButton);

// generates the the boxes that make of the grid
// box dimensions and height accommodate 'GRID_HEIGHT' and 'gridSize'
createBoxes(gridSize);
function createBoxes(size)
{
    let boxHeight = wrapper.clientWidth / size;
    for (let boxes = 0; boxes < size ** 2; boxes++)
    {
        let box = document.createElement('div');
        box.classList.add('grid-box');
        box.style.height = box.style.width = boxHeight + 'px';
    
        box.addEventListener('mouseover', colorBoxRandom)
        wrapper.appendChild(box);
    }
}
function colorBoxRandom(e)
{
    e.stopPropagation();
    if (e.target.classList.contains('colored')) return;
    let randomRed = Math.floor(Math.random() * 255) + 1
    let randomGreen = Math.floor(Math.random() * 255) + 1
    let randomBlue = Math.floor(Math.random() * 255) + 1
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    e.target.classList.add('colored');
}

function colorBoxShade(e)
{
    e.stopPropagation();
    const box = e.target;
    let colorWeight = .1;
    if (box.classList.contains('colored')) 
        colorWeight = +box.style.backgroundColor.slice(-4, -1) + 0.1
    console.log
    box.style.backgroundColor = `rgb(0, 0, 0, ${colorWeight})`
    box.classList.add('colored');
}
// resize button to create a new grid
// number of boxes across will come from user input
resizeButton.addEventListener('click', resizeGrid)

function resizeGrid(){
    deleteGrid();
    do
    {
        newSize = +prompt('Enter a new grid size');
        if (newSize > 100) alert('Size limit is 100 boxes')
        else if (newSize < 0) alert('Size should be at least 0')
    } while(!Number.isInteger(newSize) || newSize > 100 || newSize < 0);
    createBoxes(newSize);
    
}
function deleteGrid(){
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => wrapper.removeChild(box))
}

// reset button to clear boxes
resetButton.addEventListener('click', resetBoxes)

function resetBoxes()
{
    const boxes = document.querySelectorAll('.grid-box')
    boxes.forEach(box =>{
        box.style.backgroundColor = 'white';
        box.classList.remove('colored')
    })

}

