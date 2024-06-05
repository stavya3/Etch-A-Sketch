// const gridContainer = document.querySelector("#container");
// for (let i = 0; i < 16 * 16; i++) {
//     let gridItem = document.createElement("div");
//     gridItem.classList.add('gridItem');
//     gridContainer.appendChild(gridItem);
    
// }


document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
});

function createBoard(size){
    let board = document.querySelector(".container")
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow"
        board.insertAdjacentElement("beforeend", div);
    }
}