class Calculator {
    constructor(num1, operator, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
    addNumbers() {
        const text = monitor.innerHTML
        if (text.includes('+')) {
            const num1 = text.slice(0, text.indexOf('+'));
            const num2 = text.slice(text.indexOf('+') + 1, text.length);
            const result = Number(num1) + Number(num2);
            monitor.innerHTML = result;

        }
    }
    minusNumbers() {
        const text = monitor.innerHTML
        if (text.includes('-')) {
            const num1 = text.slice(0, text.indexOf('-'));
            const num2 = text.slice(text.indexOf('-') + 1, text.length);
            const result = Number(num1) - Number(num2);
            monitor.innerHTML = result;
        }

    }
    divideNumbers() {
        const text = monitor.innerHTML
        if (text.includes('/')) {
            const num1 = text.slice(0, text.indexOf('/'));
            const num2 = text.slice(text.indexOf('/') + 1, text.length);
            const result = Number(num1) / Number(num2);
            monitor.innerHTML = result;
        }
    }
    multiplyNumbers() {
        const text = monitor.innerHTML
        if (text.includes('*')) {
            const num1 = text.slice(0, text.indexOf('*'));
            const num2 = text.slice(text.indexOf('*') + 1, text.length);
            const result = Number(num1) * Number(num2);
            monitor.innerHTML = result;
        }
    }
    brackets() {
        const text = monitor.innerHTML
        if (text.includes('(') || text.includes(')')) {
            const numbers = text.slice(text.indexOf('(') + 1, text.indexOf(')'));
            if (numbers.includes('+')) {
                person.addNumbers();
            }
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
equal.addEventListener('click', function() {
    if (monitor.innerHTML.includes('(') || monitor.innerHTML.includes(')')) {
        person.brackets();
    }
    if (monitor.innerHTML.includes('+')) {
        person.addNumbers();
    } else if (monitor.innerHTML.includes('-')) {
        person.minusNumbers();
    } else if (monitor.innerHTML.includes('/')) {
        person.divideNumbers();
    } else if (monitor.innerHTML.includes('*')) {
        person.multiplyNumbers();
    }
});