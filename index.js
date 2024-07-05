
    
document.getElementById('main-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const colorVal = document.getElementById('color-input').value.slice(1, 7)
    const schemeVal = document.getElementById('scheme-select').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorVal}&mode=${schemeVal}&count=5`)
    .then(res => res.json())
    .then(data => {
        let colorsHTML = document.getElementsByClassName('clr-box')
        let underColorsHTML = document.getElementsByClassName('clr-val')
        for (let i = 0; i < colorsHTML.length; i++){
            colorsHTML[i].style.background = data.colors[i].hex.value
            underColorsHTML[i].innerHTML = data.colors[i].hex.value
        }
    })
})