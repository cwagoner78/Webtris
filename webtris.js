
//grid rendering
const grid = document.getElementById("grid");
const gridSizeX = 10;
const gridSizeY = 20;
const squares = [];

//blocks and shapes
const blockShape_T = [
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],]

let activeBlock = blockShape_T;
let activeBlockPosition = [0, 0]; //rows, columns
let activeBlockRotation = 0;

setInterval(() => {
    console.log(activeBlock, activeBlockPosition, activeBlockRotation);
    activeBlockPosition[0]++; //rows
}, 1000);

//create grid
for (let row = 0; row < gridSizeY; row++){
    squares.push([]); //start new row
    for (let col = 0; col < gridSizeX; col++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        squares[row].push(square);
    }
    
for (let blockPiece = 0; blockPiece < blockShape_T; i++){
     //if blockPiece > 0 (do the thing);

}



}