let inpt = document.getElementById('inpt1')
let count = document.getElementById('count')
let btn = document.getElementById('btn')
const img1 = document.querySelectorAll('img1')

 function data(calback) {
     const getData = new XMLHttpRequest()
    getData.addEventListener('readystatechange', ()=>{

        if(getData.readyState === 4 && getData.status === 200){
             const jsonData = JSON.parse(getData.responseText)
            jsonData.forEach(count => {
                const countName = count
                // console.log(countName);
                 calback(countName, undefined)
             });
         }else if(getData.readyState === 4){
            calback(undefined, 'Xato')
         }
     })
     getData.open('GET', 'https://restcountries.com/v3.1/all?fields=name,flags')
     getData.send()   
 } data((data, err)=>{
     if(err){
        console.log(err);
     }else{
         count.innerHTML += `<ul class="card">
         <li><img class="img1" src="${data.flags.svg}" alt=""></li>
         <li>${data.name.common}</li>
         </ul>`
     }
})


fetch('https://restcountries.com/v3.1/all?fields=name,flags').then((data)=>{

return data.json()
}).then((item)=>{
item.forEach((counts)=>{

      count.innerHTML += `<ul class="card">
        <li><img class="img1" src="${counts.flags.svg}" alt=""></li>
        <li>${counts.name.common}</li>
         </ul>`

})


}).catch((err)=>{

console.log(err);

})

inpt.addEventListener('input', ()=>{
    let val = inpt.value.toLowerCase()
    const cons = document.querySelectorAll('.card')
    cons.forEach(item => {

        
        if(item.lastElementChild.innerHTML.toLowerCase().includes(val)) {
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')
        }
    });
})

