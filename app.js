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
        input.style.color = 'rgb(205,92,50)'
        input.value = 'Please try again'
        //disabling calc
        buttons.forEach(btn => {
            btn.disabled = true
        });
        clear.disabled = true
        ac.disabled = true

        setTimeout(()=> {
            input.style.color = 'black'
            input.value = ''
            res = ''
            //abling calc
            buttons.forEach(btn => {
                btn.disabled = false
            });
            clear.disabled = false
            ac.disabled = false
        }, 1000)
    }
})