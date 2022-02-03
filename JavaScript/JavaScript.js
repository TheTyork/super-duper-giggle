let marka = document.getElementById('mark')
console.log(marka)

console.log(marka.innerText)

setTimeout(() =>{
  design('blue','black','Hello' ,'center')
},1500)

function design(color,bgcolor,text,align) {
    marka.textContent = text
    marka.style.color = color
    marka.style.background = bgcolor
    marka.style.textAlign = align
}

marka.onclick = () => {
    if (marka.style.color === 'blue'){
        marka.style.background = 'blue'
        marka.style.color = 'white'
        marka.textContent = 'world'
    }else{
        marka.style.background = 'black'
        marka.style.color = 'blue'
        marka.textContent = 'hello'

    }
}

let second = document.querySelector('.second')
secondChild = second.children[0]
console.log(secondChild)

function newStyle(bgcolor, color) {
    second.style.background = bgcolor
    secondChild.style.color = color
    second.style.width = '100%'
    second.style.padding = '2rem'
    second.style.textAlign = 'center'
}
console.log(second)
second.onclick = () => {
    newStyle('yellow','blue')
}