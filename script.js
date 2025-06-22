// Add Custom Button Element
const btnCustom = document.querySelector("#custom-button");

// Declare Default Size Grid
let defaultWidth = 64;
let defaultHeight = 64;

// Create Width Grid
function widthGrid() {
  // Add Container Element
  const container = document.querySelector(".container");

  // Sizing Width and Height Container
  container.style.minWidth = `${defaultWidth * 10}px`;
  container.style.maxWidth = `${defaultWidth * 10}px`;
  container.style.minHeight = `${defaultHeight * 10}px`;
  container.style.maxHeight = `${defaultHeight * 10}px`;

  for (let i = 1; i <= defaultWidth; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square1");

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.classList.add("black-square");
    });
  }
}

// Create Height Grid
function heightGrid() {
  for (let i = 1; i <= defaultHeight; i++) {
    widthGrid();
  }
}

heightGrid();

// Add Button Fuction
btnCustom.addEventListener("click", () => {
  // User Input
  let widthUser = document.querySelector("#width-input").value;
  let heightUser = document.querySelector("#height-input").value;
  console.log(`Width : ${widthUser}, Height : ${heightUser}`);

  if (heightUser > 80) return alert("Sorry, Maximal Width is 80");
  //   console.log(!widthUser);
  if (!widthUser || !heightUser || widthUser <= 0 || heightUser <= 0)
    return alert("Wrong Input");

  // Remove Old Container
  const containerToRemove = document.body.children[1];
  document.body.removeChild(containerToRemove);

  // Create New Container
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  // Add New Container After Custom Area
  const customArea = document.querySelector(".custom-area");
  customArea.after(container);

  defaultWidth = widthUser;
  defaultHeight = heightUser;
  heightGrid();
});
