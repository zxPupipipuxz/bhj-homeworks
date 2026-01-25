const tabContainer = document.getElementById('tabs1')
const tabs = Array.from(tabContainer.querySelectorAll('.tab'));
const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'));

for(let tab of tabs){
    tab.addEventListener('click', function(event) {
       for(tab of tabs){
        tab.classList.remove('tab_active')
       }
       for(let contents of tabContents){
        contents.classList.remove('tab__content_active')
       }
       event.target.classList.add('tab_active')
       let index = tabs.indexOf(event.target)
       tabContents[index].classList.add('tab__content_active')
    })
}