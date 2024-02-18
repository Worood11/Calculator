
function data_num(value) {
    document.getElementById('inputBox').value += value;
}


function clearDisplay() {
    document.getElementById('inputBox').value = '';
}


function calculate() {
    try {
        document.getElementById('inputBox').value = eval(document.getElementById('inputBox').value);
    } catch (error) {
        document.getElementById('inputBox').value = 'Error';
    }
}
