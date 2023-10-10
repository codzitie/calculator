function add(x,y){
    result = x+y;
    console.log(result);
    return(result);
};

function subtract(x,y){
    result = x-y;
    console.log(result);
    return(result);
};

function multiply(x,y){
    result = x*y;
    console.log(result);
    return(result);
};

function divide(x,y){
    result = x/y;
    console.log(result);
    return(result);
};

screen = document.querySelector('.display');
subScreen = document.querySelector('.sub-display')

const button1 = document.querySelector('.b1');
const button2 = document.querySelector('.b2');
const button3 = document.querySelector('.b3');
const button4 = document.querySelector('.b4');
const button5 = document.querySelector('.b5');
const button6 = document.querySelector('.b6');
const button7 = document.querySelector('.b7');
const button8 = document.querySelector('.b8');
const button9 = document.querySelector('.b9');
const button10 = document.querySelector('.b10');
const button11 = document.querySelector('.b11');

const buttons = document.querySelectorAll('.button')
let num = 0;
firstValue = 0;

buttons.forEach((button)=>{

    
    screenList = '';
    subScreenList = '';
    console.log(screenList)
    button.addEventListener('click', ()=>{
        
        // for (i=0; i<screenList+1; i++){
        //     screenList *= 10;
        //     screenList += button.textContent[0];

        // }
        screenList += button.textContent;
        console.log(screenList);
        len = screenList.length;
        screen.textContent = screenList;
        // subScreen.textContent = 'load'
        // screen.style.color = 'red';
        // subScreen.style.color = 'red';
        
        //     screenList += button.textContent;
        //     screen.textContent = screenList;
        //     screen.style.color = 'red';
        // }else{
        //     screenList += parseFloat(button.textContent);
        //     screen.textContent = screenList;
        //     screen.style.color = 'red';
        // }
        if (firstValue == 0 && screenList.charAt(screenList.length - 1) == '+'){
            num = parseFloat(screenList.slice(0,screenList.indexOf('+')));
            console.log(num,'num');
            firstValue += 1;
        };
        // var num = parseFloat(screenList.slice(0,screenList.indexOf('+')));
        // console.log(num,'num')
        console.log(num,'num');

        if (button.textContent == '+' ||button.textContent == '-' ||button.textContent == '*' ||button.textContent == '/' ||button.textContent == '=' ){
            for (i=0; i<len-1; i++){
            if (screenList[i] == '+'){

                add(num,parseFloat(screenList.slice(i+1,screenList.length)));
                subScreen.textContent = result;
                screenList= result.toString() + button.textContent;
                num = result;
                screen.textContent = result + button.textContent;
                break;

                // subScreen.style.color = 'red';
            }

            if (screenList[i] == '-'){
                subtract(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                subScreen.textContent = result;
                screenList= result.toString() + button.textContent;
                num = result;
                screen.textContent = result + button.textContent;
                break;

            }
            
            if (screenList[i] == '*'){
                multiply(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                subScreen.textContent = result;
                screenList= result.toString() + button.textContent;
                num = result;
                screen.textContent = result + button.textContent;
                break;

            }

            if (screenList[i] == '/'){
                divide(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                subScreen.textContent = result;
                screenList= result.toString() + button.textContent;
                num = result;
                screen.textContent = result + button.textContent;
                break;

            }
        }
        
        if (button.textContent === '='){
            screen.textContent = result;
        }; 

        }
        
    });
})




// for (i=0; i=20; i++){
//     button[i].addEventListener('click', ()=>{
//         screen.textContent = button[i].textContent;
//         screen.style.color = 'red';
//     });
// };



