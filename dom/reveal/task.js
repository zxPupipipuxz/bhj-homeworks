const scrollBlock = Array.from(document.querySelectorAll('.reveal'));

function revealBlock() {
    for (let block of scrollBlock) {
        if (block.getBoundingClientRect().top > 0 && block.getBoundingClientRect().bottom < window.innerHeight) {
            block.classList.add('reveal_active')
        } else {
            block.classList.remove('reveal_active')
        }
    }
}

window.addEventListener('scroll', revealBlock);