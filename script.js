// Rest api
// GET, POST, DELETE, PUT, PATCH
let container = document.querySelector('.container');
let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');


function getCountry(url){
 fetch(url)
 .then(resp=>resp.json())
 .then(data=>{
    console.log(data);
    container.innerHTML = ""
    data.forEach(x=>{
        container.innerHTML+=`
        <div class="card">
            <img src="${x.flags.png}">
            <p>${x.name.common}</p>
        </div>
        `
    })
 })
}

// inp.addEventListener('input',()=>{
//     if(inp.value != ""){
//         getCountry(`https://restcountries.com/v3.1/name/${inp.value}`)
//     }
// })
btn.addEventListener('click',()=>{
    if(inp.value != ""){
        getCountry(`https://restcountries.com/v3.1/name/${inp.value}`)
    }
})



window.addEventListener('load',()=>{
    getCountry('https://restcountries.com/v3.1/all')
})