const grid = document.getElementById("grid");
const gridSizeX = 10;
const gridSizeY = 20;

for (let i = 0; i < gridSizeX*gridSizeY; i++) 
    {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }