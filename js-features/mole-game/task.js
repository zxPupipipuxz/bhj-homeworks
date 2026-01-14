const countKill = document.getElementById('dead');
const countMiss = document.getElementById('lost');
const holes = document.querySelectorAll(".hole");
for (let element of holes) {
    element.addEventListener('click', function () {
        if (element.classList.contains('hole_has-mole')) {
            countKill.textContent++
        } else {
            countMiss.textContent++
        }
        if (countKill.textContent == 10) {
            endGame("Вы победили!");
        }
        if (countMiss.textContent == 5) {
            endGame("Вы проиграли!");
        }
    })
}
function endGame(message) {
    alert(message);
    countKill.textContent = 0;
    countMiss.textContent = 0;
}

