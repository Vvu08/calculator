const buttons = document.querySelectorAll('.btn')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const clear = document.querySelector('.clear')
const ac = document.querySelector('.ac')

let res = ''

function Display(val){
    input.value += val
    res += val
    console.log(res);
}

for (const btn of buttons){
    btn.addEventListener('click', ()=>{
        Display(btn.innerHTML)
    })
}

ac.addEventListener('click', ()=>{
    input.value = ''
    res = ''
})

clear.addEventListener('click', ()=>{
    input.value = res.slice(0, res.length-1)
    res = input.value
})

result.addEventListener('click', ()=>{
    try{
        input.value = eval(res)
        res = input.value
    } catch(e){
        input.value = 'Please try again'
        input.style.color = 'rgb(205,92,50)'
        
        setTimeout(()=> {
            input.value = ''
            res = ''
        }, 1500)
    }
})