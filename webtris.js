
//Game Setup

let gameSpeed = 1000;

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

//User input
let moveBlockLeft = addEventListener("keydown", event => {if (event.code==="KeyA") activeBlockPosition[1]--;}) 
let moveBlockRight = addEventListener("keydown", event => {if (event.code==="KeyD") activeBlockPosition[1]++;})   


setInterval(() => {
    console.log(activeBlock, activeBlockPosition, activeBlockRotation);
    activeBlockPosition[0]++; //rows

    //remove filled squares before rendering new blocks
    for (let row = 0; row < gridSizeY; row++){
        for (let col = 0; col < gridSizeX; col++){
            squares[row][col].classList.remove("filled");
        }
    }

    //render block position and fill squares
    for (let localRow = 0; localRow < 4; localRow++){
        for (let localCol = 0; localCol < 4; localCol++){
            let currentPosX = activeBlockPosition[0] + localRow;
            let currentPosY = activeBlockPosition[1] + localCol;
            console.log("Active Block Position: ", currentPosX, currentPosY);
    
            if (blockShape_T[localRow][localCol] == 1){
                squares[currentPosX][currentPosY].classList.add("filled");      
            } 
        }
    }
}, gameSpeed);

//create grid
for (let row = 0; row < gridSizeY; row++){
    squares.push([]); //start new row
    for (let col = 0; col < gridSizeX; col++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        squares[row].push(square);
    }
}

