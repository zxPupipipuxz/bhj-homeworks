const countdown = function(){
    const  timer = document.getElementById("timer");
    timer.textContent = timer.textContent - 1;
    if (timer.textContent == 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}

let intervalId = setInterval(countdown, 500);