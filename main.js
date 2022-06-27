
const num1 = parseFloat( prompt('Enter num1: '));
const num2 = parseFloat( prompt('Enter num2: '));

const operator = prompt('Enter operator (+, -, /, *)');
let result = 0;

    if(operator == '+'){
        result = num1 + num2;
    }
    else if(operator == '-'){
        result = num1 - num2;
    }
    else if(operator == '/'){
        result = num1 / num2;
    }
    else if(operator == '*'){
        result = num1 * num2;
    }
    document.write(num1 + operator + num2 +' = ' + result);