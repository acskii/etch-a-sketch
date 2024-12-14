const root = document.querySelector(":root");
const gridElement = document.querySelector("#container");

const resizeButton = document.querySelector("#resize");
const resetButton = document.querySelector("#reset");
const drawButton = document.querySelector("#draw");
const eraseButton = document.querySelector("#erase");

const palletes = [
    "#f54e42",
    "#e6a940",
    "#eff542",
    "#5ceb46",
    "#40cde6",
    "#404be6",
    "#8540e6",
    "#e640e3",
    "#191e1f",
];

let currentPixels = 16;
let penColor = palletes[0];

function colorPixel(event) {
    event.target.style.backgroundColor = penColor;
}

function changePenColor(palleteElement) {
    palleteElement.addEventListener("click", (event) => {
        const target = event.target;
        const paletteElement = document.querySelector("#pallete");

        penColor = target.dataset.color;
        root.style.setProperty("--pen-color", penColor);
        for (const child of paletteElement.children) {
            child.classList.remove("selected");
        };
        target.classList.toggle("selected");
    })
}

function erasePixel(pixelElement) {
    pixelElement.style.backgroundColor = "#ffffff";
}

function refreshGrid() {
    while (gridElement.lastElementChild) {
        gridElement.removeChild(gridElement.lastElementChild);
    }
}

function fillPallete(colors) {
    const paletteElement = document.querySelector("#pallete");

    for (const color of colors) {
        const colorElement = document.createElement("div");
        colorElement.classList.toggle("pallete");
        colorElement.dataset.color = color;
        colorElement.style.backgroundColor = color;
        changePenColor(colorElement);
        paletteElement.appendChild(colorElement);
    }

    root.style.setProperty("--pen-color", colors[0]);
    penColor = colors[0];
    paletteElement.querySelector(".pallete").classList.toggle("selected");
}

// Fill up grid content
function fillGrid(pixels=16) {
    // Get grid size and divide it on pixels
    // Generate a size*size number of pixels to place in grid
    const gridSize = gridElement.offsetWidth;
    const sizeOfPixel = Math.floor(gridSize / pixels);
    console.info(`Grid Offset Width: ${gridSize}, Size of one Pixel: ${sizeOfPixel}`);

    for (let i = 0; i < pixels; i++) {
        // create row element
        const row = document.createElement("div");
        row.classList.toggle("row");

        for (let j = 0; j < pixels; j++) {
            // fill row with pixels
            const pixel = document.createElement("div"); // TODO: Search if a better element can be used
            pixel.classList.toggle("pixel");
            pixel.style.width = `${sizeOfPixel}px`;
            pixel.style.height = `${sizeOfPixel}px`;
            row.appendChild(pixel);
        }
        
        gridElement.appendChild(row);
    }
}

function setGrid(pixels=16) {
    refreshGrid();
    fillGrid(pixels);
}

function getGridSize() {
    const size = parseInt(prompt("Enter grid size 1 to 100 (e.g 16 is 16x16)"));
    if ((size) && (size >= 1 && size <= 100)) {
        return size;
    }
    return 16;
}


fillPallete(palletes);
setGrid(currentPixels);

gridElement.addEventListener("pointerdown", e => {
    e.target.style.backgroundColor = penColor;
    gridElement.addEventListener("pointermove", colorPixel)

    gridElement.addEventListener("pointerup", () => {
        gridElement.removeEventListener("pointermove", colorPixel)
    }, {once: true})
})

resizeButton.addEventListener("click", () => {
    currentPixels = getGridSize();
    setGrid(currentPixels);
});
resetButton.addEventListener("click", () => {setGrid(currentPixels)})