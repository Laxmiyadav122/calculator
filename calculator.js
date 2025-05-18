let display = document.getElementById("display");

function appendCharacter(character){
    if(display.innerText === '0'){
        display.innerText = character;
    }else{
        display.innerText += character;
    }
}


function  calculateResult(){
    try{
        display.innerText = eval(display.innerText);
    }catch (error){
        display.innerText = "Error";
    }
}

function clearDisplay(){
    display.innerText = '0';
}


function deleteLast(){
    if(display.innerText.length > 0){
        display.innerText = display.innerText.slice(0, -1);
    }else{
        display.innerText = '0';
    }
}


