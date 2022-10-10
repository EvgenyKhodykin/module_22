const button = document.querySelector('.button')
const timeZone = document.querySelector('.timeZone')
const localDate = document.querySelector('.localDate')

button.addEventListener('click', () => {
    if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position 
        console.log(coords.latitude, coords.longitude)
        let geoFn = async() => {
            const response = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${coords.latitude}&long=${coords.longitude}`)
            const data = await response.json()
            console.log(data)
            timeZone.innerHTML = `Your time zone is: ${data.timezone}`
            localDate.innerHTML = `Your local date and time is: ${data.date_time_txt}`
        } 
        geoFn()
        })
    }
})