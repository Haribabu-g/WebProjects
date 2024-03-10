const increase = document.getElementById('increasebtn');
const decrease = document.getElementById('decreasebtn');
const reset = document.getElementById('resetbtn');
const counterlabel = document.getElementById('CounterLabel');
let count = 0;
increase.onclick = function () {
    count++;
    counterlabel.textContent = count;
}

decrease.onclick = function () {
    count--;
    counterlabel.textContent = count;
}

reset.onclick = function () {
    count = 0;
    counterlabel.textContent = count;
}
