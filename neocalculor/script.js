const display = document.getElementById("display");

function append(value){

    const operators = ['+','-','*','/','%'];

    let current = display.value;

    if(
        operators.includes(value) &&
        (
            current === "" ||
            operators.includes(current.slice(-1))
        )
    ){
        return;
    }

    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value === ""){
            return;
        }

        let result = eval(display.value);

        if(result === Infinity || isNaN(result)){
            throw Error;
        }

        display.value = result;

    }catch{
        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1500);
    }
}

document.addEventListener("keydown",(e)=>{

    const key = e.key;

    if(!isNaN(key)){
        append(key);
    }

    if(['+','-','*','/','.','%'].includes(key)){
        append(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        backspace();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});