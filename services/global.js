function toggleMenu() {
    let temp = document.querySelector("#nav_links");

    if (temp.style.display === "block"){
        temp.style.display = "none";
    }
    else {
        temp.style.display = "block";
    }

}

function darkMode(){
    const icon = querySelector("#darkModeIcon");


    if(document.body.classList.contains("dark-mode"))
    {
        icon.src = "assets/imgs/moon.png"
    }
    else{
        icon.src = "assets/imgs/sun.png"
    }
    

}