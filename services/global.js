function toggleMenu() {
    let temp = document.querySelector("#nav_links");

    if (temp.style.display === "block"){
        temp.style.display = "none";
    }
    else {
        temp.style.display = "block";
    }

    return false;
}

function dark_mode(){
    const icon = document.querySelector("#icon");
    const isDark = document.body.classList.toggle("darkMode_colors");

    if(isDark)
    {
        icon.src="assets/imgs/sun.png";
        icon.alt="sunIcon";
    }
    else{
        icon.src ="assets/imgs/moon.png";
        icon.alt="WebsiteWhiteLogo";
    }
}


