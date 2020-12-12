/* GRID SQUARES */
const gridContainer = document.querySelector(".container")

const gridSquare = document.createElement("div")
gridSquare.classList.add("gridSquare")

for (i = 0; i < 256; i++){
    gridContainer.appendChild(gridSquare)
}