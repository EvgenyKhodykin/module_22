const button = document.querySelector('.btn')
const icon1 = document.querySelector('.btn_icon1')
const icon2 = document.querySelector('.btn_icon2')

function showIcon1() {
    icon1.style.display = "block"
    icon2.style.display = "none"
    button.removeEventListener('click', showIcon1)
    button.addEventListener('click', showIcon2)
}
function showIcon2() {
    icon2.style.display = "block"
    icon1.style.display = "none"
    button.removeEventListener('click', showIcon2)
    button.addEventListener('click', showIcon1)
}
button.addEventListener('click',showIcon2)

