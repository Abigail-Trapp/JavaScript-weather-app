var mykey = config.MY_KEY
const url = `https://api.openweathermap.org/data/2.5/weather?q=denver&appid=${mykey}`
const xhr = new XMLHttpRequest()
xhr.open('GET',url)
xhr.send()
xhr.onload = () =>{
    const data = JSON.parse(xhr.response)
let userCity = document.querySelector('input').value
let button = document.querySelector('button').addEventListener('click', ()=>{
    userCity = data.name
    console.log(userCity)
})
    
}
