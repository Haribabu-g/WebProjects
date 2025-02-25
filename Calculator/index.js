const display = document.getElementById("display");

function appendToDisplay(Input){
    display.value += Input;
}

function ClearScreen(){
    display.value = "";
}

function Calc(){
    try{
    display.value = eval(display.value);
    }
    catch(Error){
        display.value = "ERROR";
    }
}d