let theme = "dark"
function switchTheme(){
    body = document.body
    if(theme == "dark"){
        body.setAttribute("data-theme", "light")
        theme = "light"
    }
    else{
        body.setAttribute("data-theme", "dark")
        theme = "dark"
    }
}