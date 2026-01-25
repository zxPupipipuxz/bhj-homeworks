const rollBar = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

function getSpeedAndColor() {
    let el = document.querySelector('.rotator__case_active');
    el.style.color = el.getAttribute('data-color');
    if (el) {
        return el.getAttribute('data-speed')
    }
    return 1000
}

function changeSpeed(speed) {
    clearInterval(intervalId)
    intervalId = setInterval(rotate, speed)
}

function rotate() {
    rollBar[i].classList.remove('rotator__case_active');
    if (rollBar[i + 1]) {
        rollBar[i + 1].classList.add('rotator__case_active');
        i++
    } else {
        rollBar[0].classList.add('rotator__case_active');
        i = 0;
    }

    changeSpeed(getSpeedAndColor())
}

let intervalId = setInterval(rotate, getSpeedAndColor())