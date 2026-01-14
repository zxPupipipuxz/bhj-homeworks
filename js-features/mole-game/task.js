const countKill = document.getElementById('dead');
const countMiss = document.getElementById('lost');
const holes = document.querySelectorAll(".hole");
for (let element of holes) {
    element.addEventListener('click', function (event) {
        if (element.classList.contains('hole_has-mole')) {
            countKill.textContent++
        } else{
            countMiss.textContent++
        }
        if (countKill.textContent == 10) {
            alert("Вы победили!");
            countKill.textContent = 0;
            countMiss.textContent = 0;
        }
        if(countMiss.textContent == 5) {
            alert("Вы проиграли!");
            countKill.textContent = 0;
            countMiss.textContent = 0;
        }
    })
}
