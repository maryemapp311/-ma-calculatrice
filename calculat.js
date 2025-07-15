
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.calculator button');
let operation = "";
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'DEL') {
            operation = operation.slice(0, -1);
        } else if (value === 'RESET') {
            operation = "";
        } else if (value === '=') {
            try {
                operation = eval(operation).toString();
            } catch {
                operation = "Erreur";
            }
        } else {
            operation += value;
        }
        screen.textContent = operation || "0";
    });
});