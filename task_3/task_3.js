const button = document.querySelector('.button')
const screenSize = document.querySelector('.screenSize')
const myLocation = document.querySelector('.location')

button.addEventListener('click', () => {
    screenSize.innerHTML = `Screen resolution is ${window.screen.width}x${window.screen.height}`
    if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position
        myLocation.innerHTML = `Your geolocation is: ${coords.latitude}, ${coords.longitude}`    
    })
}
})