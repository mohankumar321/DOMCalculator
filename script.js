
document.addEventListener("DOMcontentLoaded",function(){
const screenDisplay =document.getElementById('screen');
const spans =document.querySelectorAll('.buttons span');
const spanArray=Array.from(spans);
document.querySelectorAll('.operator')[1].innerText='/';
document.querySelectorAll('.operator')[2].innerText='*';

spanArray.map(button=>button.addEventListener('click', function(){
    if(button.innerText!== "="){
        screenDisplay.innerText+=button.innerText
    };
        if(button.innertext ==="="){
            screenDisplay.innerText=eval
            (screenDisplay.innerText)
        };
        if(button.innertext === "C"){
            screenDisplay.innerText=""
         };
        }));
    });

