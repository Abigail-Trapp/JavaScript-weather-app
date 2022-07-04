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
        console.log(data)
        console.log(data.coord)
        console.log(data.weather)
            for(let i of data.weather){
                for(let j in i){
                    console.log(j)
                    console.log(`${i[j]}`)
                }
            }
    }
}