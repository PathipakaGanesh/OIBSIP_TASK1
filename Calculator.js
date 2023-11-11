document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById('inputbox');
    let evaluationStringDisplay = document.getElementById('evaluationString');
    let buttons = document.querySelectorAll('button');
    let string = '';
    let evaluationHistory = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerHTML;

            if (buttonText === 'ans') {
                string = evaluateExpression(string);
                input.value = string; 
            } else if (buttonText === 'clear') {
                string = '';
                input.value = string;
            } else if (buttonText === 'del') {
                string = string.slice(0, -1);
                input.value = string;
            } else if (buttonText === 'ENTER') {
                try {
                    let evaluation = evaluateExpression(string);
                    input.value = evaluation; 
                    evaluationStringDisplay.textContent = string; 
                } catch (error) {
                    input.value = 'Error';
                }
            } else {
                if (buttonText === '÷') {
                    string += ' / ';
                } else if (buttonText === '√') {
                    string += ' Math.sqrt(';
                } else if (buttonText === 'x') {
                    string += ' * ';
                } else if (buttonText === '±') {
                    string += ' - ';
                } else {
                    string += buttonText;
                }
                input.value = string;
            }
        });
    });

    function evaluateExpression(inputString) {
        try {
            return Function('return ' + inputString)();
        } catch (error) {
            return 'Error';
        }
    }
});
