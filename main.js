/* FUNCTIONS */
function changeColor(e){
    e.target.classList.add("pixelated")
}



/* GRID SQUARES */
const gridContainer = document.querySelector(".container")



for (i = 0; i < 256; i++){
    const gridSquare = document.createElement("div")
    gridSquare.classList.add("gridSquare")
    gridSquare.addEventListener("mouseover", changeColor)
    gridContainer.appendChild(gridSquare)
}