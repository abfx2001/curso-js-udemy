const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const stylesBody = getComputedStyle(document.body)
const backgroundCoolorBody = stylesBody.backgroundColor
console.log(backgroundCoolorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundCoolorBody
    p.style.color = '#FFFFFF'
}