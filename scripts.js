
const container = document.querySelector('.container');
const pickButton = document.querySelector('.pickButton');
const resetButton = document.querySelector('.resetButton')

pickButton.addEventListener('click', () => {
    picksize()
});

resetButton.addEventListener('click', () => {
    reset();
});

let createDivs = (width, height) => {
    for (let i = 0; i < width*height; i++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        div.setAttribute("id", `g${i}`)
        container.appendChild(div)};
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
    addHover()
}
let picksize = () => {
    let rows = prompt("Please enter the desired number of rows");
    let columns = prompt("Please enter the desired number of columns");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createDivs(columns, rows);
};

function addHover() {        
    let divs = Array.from(document.querySelectorAll('.grid'))
    divs.forEach(gridCell => gridCell.addEventListener('mouseover', makeDark))
}

function makeDark(e) {
    let id = e.target.id;
    document.querySelector(`#${id}`).classList.add("dark")
}

function reset() {
    let divs = Array.from(document.querySelectorAll('.grid'))
    divs.forEach(gridCell => gridCell.classList.remove("dark"))
}

createDivs(25, 25);

