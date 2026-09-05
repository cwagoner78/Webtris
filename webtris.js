
//Game Setup
let gameSpeed = 1000;

//grid rendering
const grid = document.getElementById("grid");
const gridSizeX = 10;
const gridSizeY = 20;
const squares = [];
let activeBlock = blockShape_J;
let activeBlockPosition = [0, 0]; //rows, columns

//User input
addEventListener("keydown", event => {ControlBock(event, blockSize)})

//will eventually go into the block spawner
if (activeBlock != blockShape_I && activeBlock != blockShape_O) {
    blockSize = 3
} else {
    blockSize = 4
}
 
//Tick - game speed
setInterval(() => {
    //console.log(activeBlock, activeBlockPosition);
    activeBlockPosition[0]++; //rows
    UpdateBlock();
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

function UpdateBlock ()
{
    


    //remove filled squares before rendering new blocks
    for (let row = 0; row < gridSizeY; row++){
        for (let col = 0; col < gridSizeX; col++){
            squares[row][col].classList.remove("filled");
        }
    }

    //render squares
    for (let localRow = 0; localRow < blockSize; localRow++){
        for (let localCol = 0; localCol < blockSize; localCol++){
            let currentPosX = activeBlockPosition[0] + localRow;
            let currentPosY = activeBlockPosition[1] + localCol;
            //console.log("Active Block Position: ", currentPosX, currentPosY);
            if (activeBlock[localRow][localCol] == 1){
                squares[currentPosX][currentPosY].classList.add("filled");      
            } 
        }
    }
}

function ControlBock(event, size){
    if (event.code==="KeyA"||event.code==="ArrowLeft"){
        activeBlockPosition[1]--;UpdateBlock();
    } else if (event.code==="KeyD"||event.code==="ArrowRight") {
        activeBlockPosition[1]++;UpdateBlock();
    } else if (event.code==="KeyW"||event.code==="ArrowUp") {
        activeBlock = RotateBlock(activeBlock, 0, size);
        UpdateBlock();
    } else if (event.code==="KeyS"||event.code==="ArrowDown") {
        activeBlock = RotateBlock(activeBlock, 1, size);
        UpdateBlock();
        
    }
}

function RotateBlock(activeBlock, direction, size){
    let rotateBlock = Array(size).fill(0).map(x => Array(size).fill(0));
    for (let row = 0; row < size; row++){
        for (let col = 0; col < size; col++){
            
            //store old rotation
            let old = activeBlock[row][col];
            
            //clockwise
            if (direction == 1){
                let newRowClock = col;    
                let newColClock = (size - 1) - row;
                rotateBlock[newRowClock][newColClock] = old;
            }
            
            //counter
            if (direction == 0){
                let newRowCounter = (size - 1) - col;
                let newColCounter = row;
                rotateBlock[newRowCounter][newColCounter] = old;
            }

           
        }
    }
    return rotateBlock;
}

