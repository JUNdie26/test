let x = 42;
let y = 2;

let op = '+';

function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;

        case '-':
            return a - b;        

        case '/':
            if (a === 0) {
                return '오류가 났습니다.';
            }

            return a / b;

        case '*':
            return a * b;

        default:
            return '제대로 된 연산자를 사용해주십시오.';
    }
}

console.log(x, '+', y, '=', calculate(x, y, op));