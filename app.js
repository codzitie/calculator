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


buttons.forEach((button)=>{
    screenList = '';
    console.log(screenList)
    button.addEventListener('click', ()=>{
        
        // for (i=0; i<screenList+1; i++){
        //     screenList *= 10;
        //     screenList += button.textContent[0];

        // }
        screenList += button.textContent;
        screen.textContent = screenList;
        screen.style.color = 'red';
        // if (button.textContent == '+' ||button.textContent == '-' ||button.textContent == '*' ||button.textContent == '/' ||button.textContent == '=' ){
        //     screenList += button.textContent;
        //     screen.textContent = screenList;
        //     screen.style.color = 'red';
        // }else{
        //     screenList += parseFloat(button.textContent);
        //     screen.textContent = screenList;
        //     screen.style.color = 'red';
        // }
        
        // firstNumber += screenList[0];

        for (i=0; i<screenList.length-1; i++){
            if (screenList[i] == '+'){
                add(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                res = result;
                screen.textContent = result;

            }

            if (screenList[i] == '-'){
                subtract(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                res = result;
                screen.textContent = result;

            }
            
            if (screenList[i] == '*'){
                multiply(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                res = result;
                screen.textContent = result;

            }

            if (screenList[i] == '/'){
                divide(parseFloat(screenList.slice(0,i)),parseFloat(screenList.slice(i+1,screenList.length)));
                res = result;
                screen.textContent = result;

            }
        }
        
        if (button.textContent === '='){
            for (i=0; i<screenList.length-1; i++){
                if (screenList[i] == '+'){
        		    add(parseFloat(res),parseFloat(screenList.slice(i+1,screenList.length)));
                    screen.textContent = result;
                }

                if (screenList[i] == '-'){
                    subtract(parseFloat(res),parseFloat(screenList.slice(i+1,screenList.length)));
                    screen.textContent = result;
                }
                
                if (screenList[i] == '*'){
                    multiply(parseFloat(res),parseFloat(screenList.slice(i+1,screenList.length)));
                    screen.textContent = result;
                }

                if (screenList[i] == '/'){
                    divide(parseFloat(res),parseFloat(screenList.slice(i+1,screenList.length)));
                    screen.textContent = result;
                }
            }
        }; 
    });
})


// for (i=0; i=20; i++){
//     button[i].addEventListener('click', ()=>{
//         screen.textContent = button[i].textContent;
//         screen.style.color = 'red';
//     });
// };



