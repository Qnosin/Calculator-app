class Calculator {
    constructor(num1, operator, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
    multiplyNumbers() {
        const text = monitor.innerHTML
        if (text) {
            let arr = []
            let counter = 0;
            
            text.split('').forEach(n =>{
                if(n !== ' ' && n !== '\n'){
                    arr.push(n)
                }
            })
            let sumofFirstNumbers = arr[0] + arr[1]
            if(Number(sumofFirstNumbers ) >= 10){
                counter = Number(sumofFirstNumbers )
            }else{
                counter = Number(arr[0])
            }
            console.log(arr)
            console.log(counter)
            for(let d of arr){
                if(d == '*'){
                    console.log(counter)
                   const indexMultiply = arr.indexOf(d)
                   let sumofSecondNumbers = arr[indexMultiply +1] + arr[indexMultiply +2]
                   if(sumofSecondNumbers >= 10){
                       counter = counter * sumofSecondNumbers
                   }else{
                    counter = counter * arr[indexMultiply + 1];
                   }
                }else if(d == '+'){
                    const indexOFaddNumbers = arr.indexOf(d)
                    let sumofSecondNumbers = arr[indexOFaddNumbers +1] + arr[indexOFaddNumbers +2]
                    if(sumofSecondNumbers >= 10){
                        counter = counter + sumofSecondNumbers
                    }else{
                        counter = counter + Number(arr[indexOFaddNumbers + 1]);
                    }
                }else if(d == '-'){
                    const indexOFminusNumber = arr.indexOf(d)
                    let sumofSecondNumbers = arr[indexOFminusNumber +1] + arr[indexOFaddNumbers +2]
                    if(sumofSecondNumbers >= 10){
                        counter = counter - sumofSecondNumbers
                    }else{
                        counter = counter - Number(arr[indexOFminusNumber + 1]);
                    }
                }else if(d == '/'){
                    const indexOFdivideNumber = arr.indexOf(d)
                    let sumofSecondNumbers = arr[indexOFdivideNumber +1] + arr[indexOFdivideNumber +2]
                    if(sumofSecondNumbers >= 10){
                        counter = counter / sumofSecondNumbers
                    }else{
                        counter = counter / Number(arr[indexOFdivideNumber + 1]);
                    }
                }
                
            }
            monitor.innerHTML = counter;
        }
    }
}

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator')
const monitor = document.querySelector('.screen');
const equal = document.querySelector('.equal');
const person = new Calculator(numbers, operators, numbers);
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
        } else {
            monitor.innerHTML += i.value;
        }

    })
}
equal.addEventListener('click', ()=>{
    person.multiplyNumbers();
})