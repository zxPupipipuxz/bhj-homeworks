const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
image.onclick = function() {
    count.textContent++;
    if(count.textContent % 2 !== 0) {
        image.width = 225;
    } else {
        image.width = 200;
    }
}