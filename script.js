function f1() {
    let a = +document.querySelector('.num-a').value;
    let b = +document.querySelector('.num-b').value;
    let select = document.querySelector('.oper').value;
    let result;
    switch (select) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = b / 100 * a;
            break;
    }
    document.querySelector('.result').innerHTML = result;
}
document.querySelector('.num-b').oninput = f1;
