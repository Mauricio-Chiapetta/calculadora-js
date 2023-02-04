// pegando todos os elementos 
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//operation of the buttons
document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value

    })
})
// clean (C)
document.getElementById('clear').addEventListener('click', () => {
    input.value = input.value.slice(0, 0) //you can also use an empty string => input.value = ''
    input.focus()
})
// result(=)
document.getElementById('equal').addEventListener('click', calculate)



// the input only allows clicking on the keys that have in the 'allowedkeys' array
input.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
        
    }
})

// calculate the value
function calculate() {
    // function 'eval()' is not recommended !! can be dangerous in big projects...

    resultInput.value='ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
  
}


//switch DARK/LIGHT theme

document.getElementById('themeSwitcher').addEventListener('click',()=>{

    if(main.dataset.theme ==='dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--border-color','#212529')
        root.style.setProperty('--primary-color','#1d55a8')
        main.dataset.theme='light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--primary-color','#4b8df0')
        root.style.setProperty(' #themeSwitcher','color','#212529')

        main.dataset.theme='dark'

    }

})

// copy and paste button
document.getElementById('copyToClipboard').addEventListener('click',(ev)=>{

    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied✔️'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }

})
    
