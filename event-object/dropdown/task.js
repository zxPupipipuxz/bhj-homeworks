const menuName = document.querySelector('.dropdown__value');
const menuList = document.querySelector('.dropdown__list');
const menuItems = Array.from(document.querySelectorAll('.dropdown__item'));

menuName.addEventListener('click', () => {
    menuList.classList.toggle('dropdown__list_active');
});

for (let item of menuItems) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        menuName.textContent = event.currentTarget.textContent;
        menuList.classList.remove('dropdown__list_active');
    })
}