function iterateSquares(squaresPerSide, process){
    for (i = 0; i < (squaresPerSide ** 2); i ++){
        process()
    }
}



/* GRID SQUARES */
function changeColor(e){
    e.target.classList.add("pixelated")
}

function makeSquare(){
    const gridSquare = document.createElement("div")
    gridSquare.classList.add("gridSquare")
    gridSquare.addEventListener("mouseover", changeColor)
    gridContainer.appendChild(gridSquare)
}



const gridContainer = document.querySelector(".container")
iterateSquares(16,makeSquare)


/* for (i = 0; i < 256; i++){
    const gridSquare = document.createElement("div")
    gridSquare.classList.add("gridSquare")
    gridSquare.addEventListener("mouseover", changeColor)
    gridContainer.appendChild(gridSquare)
} */


/* BUTTON */
function clearAndAlert(){
    const divs = document.querySelectorAll(".gridSquare")
    divs.forEach( (gridSquare) => {
        gridContainer.removeChild(gridSquare)
    })


    result = prompt("How many squares per side do you want?")
    while ((result > 100) || (result < 1)) {
        result = prompt("Out of range! How many squares per side do you want?")
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${result}, 1fr); grid-template-rows: repeat(${result}, 1fr)`)
    iterateSquares(result, makeSquare)
}



const btn = document.querySelector(".clearButton")
btn.addEventListener("click", clearAndAlert)