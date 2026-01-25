const book = document.getElementById('book')
const fsControl = Array.from(book.querySelectorAll('.font-size'));
const colorControl = Array.from(book.querySelector('.book__control_color').querySelectorAll('.color'));
const bgControl = Array.from(book.querySelector('.book__control_background').querySelectorAll('.color'));
const bookText = document.querySelectorAll('.book__content')



for (const fsController of fsControl) {
    fsController.addEventListener('click', function (event) {
        event.preventDefault();
        for (const fsController of fsControl) {
            fsController.classList.remove('font-size_active')
        }
        this.classList.add('font-size_active');
        if (this.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')

        } else if (this.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small')
            book.classList.remove('book_fs-big')

        }
    })
} 

for (const colorController of colorControl) {
    colorController.addEventListener('click', function(event) {
        event.preventDefault();
        for (const colorController of colorControl) {
            colorController.classList.remove('color_active')
        }
        this.classList.add('color_active')
        for(const text of bookText){
        text.style.color = this.getAttribute('data-text-color')
        }
    })
}

for (const bgController of bgControl) {
    bgController.addEventListener('click', function(event) {
        event.preventDefault();
        for (const bgController of bgControl) {
            bgController.classList.remove('color_active')
        }
        this.classList.add('color_active')
        for(const text of bookText){
        text.style.backgroundColor = this.getAttribute('data-bg-color')
        }
    })
}
