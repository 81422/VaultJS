var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;

function getNumber(clickedButton) 
{
    clickCounter++;
    codeContainer.innerHTML += clickedButton.value;

    if(clickCounter == 1)
    {
        numberOne = clickedButton.value;
    }
    else if(clickCounter == 2)
    {
        numberTwo = clickedButton.value;
    }
    else
    {
        numberThree = clickedButton.value;
    }

    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
}