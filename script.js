var colors = generateRandom(6);
var pickedColor = colorPicker();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var changeHback = document.querySelector("#headLine");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

colorDisplay.textContent = pickedColor;

var numSquare = 6;

easyBtn.addEventListener("click", function()    {
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateRandom(numSquare);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i <squares.length; i++)    {
        if(colors[i])   {
            squares[i].style.backgroundColor = colors[i];
        }
        else    {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function()    {
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandom(numSquare);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i <squares.length; i++)    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})

reset.addEventListener("click", function()  {
    messageDisplay.textContent = "";
    colors = generateRandom(numSquare);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    reset.textContent = "New Colors";
})

var squares = document.querySelectorAll(".square");
for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {

        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            colorChange(pickedColor);
            headLine.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again?";
        }
        else    {
            this.style.backgroundColor = "#000711";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function colorChange(color)  {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function colorPicker()  {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandom(num)    {
    var arr = [];
    for(var i=0; i<num; i++)    {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor()  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")"
}