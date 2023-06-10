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
    
        box.addEventListener('mouseover', () => box.classList.add('colored'))
        box.addEventListener('click', (e) => e.target.classList.toggle('colored'));
        wrapper.appendChild(box);
    }
}

// resize button to create a new grid
// number of boxes across will come from user input
resizeButton.addEventListener('click', resizeGrid)

function resizeGrid(){
    deleteGrid();
    do
    {
        newSize = +prompt('Enter a new grid size');
    } while(!Number.isInteger(newSize));
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
    boxes.forEach(box => box.classList.remove('colored'));
}

