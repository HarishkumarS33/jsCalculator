'use strict';
let runningTotal = 0;
let buffer = "0";
let previousOperator;


const output = document.querySelector(".output");
const btn = document.querySelector(".calc-btns");
function clickOperation(Value)
{
    console.log(Value);
    if(isNaN(Value))
    {
        handlingSymbol(Value);
    }
    else
    {
        handlingNumber(Value);
    }
    output.innerHTML = buffer;
}
function handlingSymbol(Value)
{
    switch(Value)
    {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length===1)
            {
                buffer='0';
            }
            else 
            {
                console.log(buffer.length);
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        case '=':
            mathsOperation(parseInt(buffer));
            previousOperator=null
            buffer = runningTotal;
            runningTotal = 0;
            break;

        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(Value);
        break;
    }
}
function handleMath(symbol)
{
    if(buffer=='0')
        return;
    const intBuffer = parseInt(buffer);
    if(runningTotal==0)
    {
        runningTotal=intBuffer;
    }
    else 
    {
        mathsOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}
function mathsOperation(intBuffer)
{   
    if(intBuffer==='0')
        return;
    if(previousOperator==='+')
        runningTotal+= intBuffer;
    else if(previousOperator==='−')
        runningTotal-=intBuffer;
    else if(previousOperator==='×')
        runningTotal*=intBuffer;
    else if(previousOperator==='÷')
        runningTotal/=intBuffer;
    
}
function handlingNumber(intString)
{
    if(buffer=='0')
    buffer = intString;
    else 
    buffer+=intString;
}

function init()
{
    btn.addEventListener('click',function(event){
        clickOperation(event.target.innerText)
    })
}
init();   