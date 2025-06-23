let theme = "dark"
let imgTheme = document.getElementById("imgTheme")
function switchTheme(){
    body = document.body
    if(theme == "dark"){
        body.setAttribute("data-theme", "light")
        theme = "light"
        imgTheme.src = "/src/assets/header/sun.png"
    }
    else{
        body.setAttribute("data-theme", "dark")
        theme = "dark"
        imgTheme.src = "/src/assets/header/moon.png"
    }
}