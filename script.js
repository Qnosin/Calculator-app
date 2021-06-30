class Calculator {
    constructor(num1, operator, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
    Main() {
        const text = monitor.innerHTML
        
       if(text.includes('*')){
           const multiply = text.indexOf('*');
           const firstNum = text.slice(0,multiply);
           const secondNum = text.slice(multiply + 1);
           let answer = Number(firstNum) * Number(secondNum);
           monitor.innerHTML = answer
        }else if(text.includes('+')){
           const plus = text.indexOf('+');
           const firstNum = text.slice(0,plus);
           const secondNum = text.slice(plus + 1);
           let answer = Number(firstNum) + Number(secondNum);
           monitor.innerHTML = answer
        }else if(text.includes('-')){
           const minus = text.indexOf('-');
           const firstNum = text.slice(0,minus);
           const secondNum = text.slice(minus + 1);
           let answer = Number(firstNum) - Number(secondNum);
           monitor.innerHTML = answer
        }else if(text.includes('/')){
           const divide = text.indexOf('/');
           const firstNum = text.slice(0,divide);
           const secondNum = text.slice(divide + 1);
           let answer = Number(firstNum) / Number(secondNum);
           monitor.innerHTML = answer
        } 

    }
}

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator')
const monitor = document.querySelector('.screen');
const equal = document.querySelector('.equal');
const person = new Calculator(numbers, operators, numbers);
let counter = 0;
for (const i of person.num1) {
    i.addEventListener('click', function() {
        monitor.innerHTML += i.value;
    })
}
for (const i of operators) {
    i.addEventListener('click', function() {
        if (i.value == '=') {

        } else if (i.value == 'Ac') {
            monitor.innerHTML = '';
            counter = 0;
        }else{
            if(counter < 1){
            monitor.innerHTML += i.value;
            counter ++;
            }
            else if(counter > 1){

            }
        }

    })
}
equal.addEventListener('click', ()=>{
    person.Main();
    counter = 0;
})