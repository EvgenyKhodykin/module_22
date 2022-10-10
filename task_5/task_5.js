const input = document.querySelector('.input')
const btnSend = document.querySelector('.js_btn_send')
const btnGeo = document.querySelector('.js_btn_geo')
const chatWindow = document.querySelector('.chat_window')
const connectionStatus = document.querySelector('.status')
const chatUrl = 'wss://echo-ws-service.herokuapp.com/'

let websocket = new WebSocket(chatUrl)
websocket.onopen = () => {
    console.log('Connected')
    connectionStatus.innerHTML = 'Connected'  
    }
websocket.onerror = () => {
    connectionStatus.innerText = 'Connection failed...'
    }

btnSend.addEventListener('click', () => {
    if (!input.value) {
        alert ('Write a message')
        divMessage.remove()
    }
    
    let divMessage = document.createElement('div')
    chatWindow.appendChild(divMessage)
    let divClientMessage = document.createElement('div')
    divClientMessage.className = 'client_message'
    divMessage.appendChild(divClientMessage)
    let clientMessage = document.createElement('p')
    divClientMessage.appendChild(clientMessage)
    clientMessage.innerHTML = input.value
        
    websocket.send(input.value)  
    input.value = ''
   
    websocket.onmessage = function(event) {
        console.log(event.data)
        let divMessage = document.createElement('div')
        chatWindow.appendChild(divMessage)
        let divServerMessage = document.createElement('div')
        divServerMessage.className = 'server_message'
        divMessage.appendChild(divServerMessage)
        let serverMessage = document.createElement('p')
        divServerMessage.appendChild(serverMessage)
        serverMessage.innerText = event.data
    }
})

btnGeo.addEventListener('click', () => {
    let divMessage = document.createElement('div')
    chatWindow.appendChild(divMessage)
    let divClientMessage = document.createElement('div')
    divClientMessage.className = 'client_message'
    divMessage.appendChild(divClientMessage)
    let clientMessage = document.createElement('p')
    divClientMessage.appendChild(clientMessage)
    clientMessage.innerHTML = 'My Geolocation'
    
    if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position 
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude,longitude)
        
        let divMessage = document.createElement('div')
        chatWindow.appendChild(divMessage)
        let divServerMessage = document.createElement('div')
        divServerMessage.className = 'server_message'
        divMessage.appendChild(divServerMessage)
        let linkMessage = document.createElement('a')
        linkMessage.className = 'link'
        divServerMessage.appendChild(linkMessage)
        let linkText = document.createTextNode('https://www.openstreetmap.org/')
        linkMessage.appendChild(linkText)
        linkMessage.target = '_blank'
        linkMessage.title = `https://www.openstreetmap.org/?mlat=59.81934&mlon=32.35923#map=17/${latitude}/${longitude}`
        linkMessage.href = `https://www.openstreetmap.org/?mlat=59.81934&mlon=32.35923#map=17/${latitude}/${longitude}`
        })
    }
})
