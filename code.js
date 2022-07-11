var mykey = config.MY_KEY
let userCity = document.getElementById('input')
let button = document.getElementById('button')
button.onclick = function(){
    const xhr = new XMLHttpRequest()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity.value}&appid=${mykey}`
    xhr.open('GET',url)
    xhr.send()
    xhr.onload = () =>{
        const data = JSON.parse(xhr.response)

        let body = document.querySelector("body")
        let name = document.createElement("h1")
        name.innerHTML=`${data.name}`
        body.append(name)

        console.log(data)
        console.log(data.coord)
        console.log(data.weather)
            for(let i of data.weather){
                for(let j in i){
                    let weather = document.createElement("p")
                    weather.innerHTML = `${i[j]}`
                    name.append(weather)
                }
            }
    }
}