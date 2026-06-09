const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let result = eval(display.value);

        if(result === undefined){
            display.value = "";
        }else{
            display.value = result;
        }

    }catch{

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        },1000);
    }
}

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        ["+","-","*","/", "."].includes(key)
    ){
        appendValue(key);
    }

    if(key === "Enter" || key === "="){
        event.preventDefault();
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});