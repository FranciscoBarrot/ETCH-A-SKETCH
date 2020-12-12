/* GRID SQUARES */
const gridContainer = document.querySelector(".container")



for (i = 0; i < 256; i++){
    const gridSquare = document.createElement("div")
    gridSquare.classList.add("gridSquare")
    gridContainer.appendChild(gridSquare)
}