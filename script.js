function toggleMode() {
    const html = document.documentElement

    //Esse é um jeito de fazer o botão mover:
    // if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    // } else {
    //    html.classList.add('light')
    // ou assim:

    html.classList.toggle("light")

    

const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
   
} else {
    img.setAttribute('src', './assets/avatar.png')

}

}