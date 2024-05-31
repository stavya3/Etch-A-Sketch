const gridContainer = document.querySelector("#container");
for (let i = 0; i < 16 * 16; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
    
}