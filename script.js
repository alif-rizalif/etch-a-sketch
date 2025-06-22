// Add Container Element
const container = document.querySelector(".container");

// Create 1x16 Square
function grid1x32() {
  for (let i = 1; i <= 32; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square1");

    container.appendChild(square);
  }
}

// Create 16x16 Square
function grid32x32() {
  for (let i = 1; i <= 32; i++) {
    grid1x32();
  }
}

grid32x32();
