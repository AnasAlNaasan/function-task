let count = 0;

function addNumber() {
    count++;
    document.getElementById('number').innerHTML = count;
}

function decNumber() {
    count--;
    document.getElementById('number').innerHTML = count;
}