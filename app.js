function add(x,y){
    console.log(x+y);
    return(x+y);
};

function subtract(x,y){
    console.log(x-y);
    return(x-y);
};

function multiply(x,y){
    console.log(x*y);
    return(x*y);
};

function divide(x,y){
    console.log(x/y);
    return(x/y);
};

console.log('hey')

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
    button.addEventListener('click', ()=>{
        screen.textContent = button.textContent;
        screen.style.color = 'red';
    });
})


// for (i=0; i=20; i++){
//     button[i].addEventListener('click', ()=>{
//         screen.textContent = button[i].textContent;
//         screen.style.color = 'red';
//     });
// };


function display(){
    
};

