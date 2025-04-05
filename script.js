const btn = document.querySelector(".btn");
const board = document.querySelector(".board");


btn.addEventListener("click", () => changeGrid());

function changeGrid() {
    let res = prompt("Enter the number of boxes(1-100): ");
    if (res < 0 || res >100) {
        alert("Please enter a number between 1-100");
        return;
    }

    createBoxes(res);
}

function createBoxes(res) {
    board.innerHTML = "";
    for(let i=0; i<res*res; i++) {
        let box = document.createElement("div");
        box.style.boxSizing = "border-box";
        box.style.height = `${960/res}px`;
        box.style.width = `${960/res}px`;
        box.style.display = "flex";
        box.style.border = "1px solid black";

        box.addEventListener("mouseenter", function() {
            box.style.backgroundColor = getRandomColor();
            box.style.border = "none";
        });

        board.appendChild(box);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}




/*placing the 16x16 board initially*/
createBoxes(16);

