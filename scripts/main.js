const container = document.querySelector('.container');
// set grid dimension variable
const GRID_SIZE = 4;
const GRID_HEIGHT = '400px';

const wrapper = document.createElement('div');
wrapper.style.height = wrapper.style.width = GRID_HEIGHT;
wrapper.classList.add('grid-wrapper');
container.insertBefore(wrapper, document.querySelector('.reset-button'));

// calculate the dimensions of each box by using the width of grid wrapper
let boxHeight = wrapper.clientWidth / GRID_SIZE;
// Loop the creation of boxes; number = grid dimension ^ 2



for (let boxes = 0; boxes < GRID_SIZE ** 2; boxes++)
{
    let box = document.createElement('div');
    box.classList.add('grid-box');
    box.style.height = box.style.width = boxHeight + 'px';

    box.addEventListener('mouseover', () => box.classList.add('colored'))
    wrapper.appendChild(box);
}
// for each box, add grid-box to classlist

// append each box to the grid as child