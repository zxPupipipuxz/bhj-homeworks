const menuName = document.querySelectorAll('.dropdown__value');
const menuList = document.querySelectorAll('.dropdown__list');
const menuItems = Array.from(document.querySelectorAll('.dropdown__item'));

for (let menu of menuName) {
    menu.addEventListener('click', () => {
        menu.nextElementSibling.classList.toggle('dropdown__list_active');
    });
}

for (let item of menuItems) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        this.parentElement.previousElementSibling.textContent = event.currentTarget.textContent;
        this.parentElement.classList.remove('dropdown__list_active');
    })
}