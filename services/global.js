function toggleMenu() {
    let temp = document.querySelector("#nav_links");

    if (temp.style.display === "block"){
        temp.style.display = "none";
    }
    else {
        temp.style.display = "block";
    }
}

function dark_mode(){
    const icon = document.querySelector("#icon");
    const webLogo = document.querySelector("#logo");
    const isDark = document.body.classList.toggle("dm_colors");

    if(isDark)
    {
        icon.src="assets/imgs/sun.png";
        icon.alt="sunIcon";
        // webLogo.src="assets/imgs/whiteLogo.png";
        // webLogo.alt="whiteLogo";
        sessionStorage.setItem("darkMode" , "enabled");
    }
    else{
        icon.src ="assets/imgs/moon.png";
        icon.alt="WebsiteWhiteLogo";
        // webLogo.src="assets/imgs/logo3.png";
        // webLogo.alt="WebsiteLogo";
        sessionStorage.setItem("darkMode" , "disabled");
    }
}


if (sessionStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dm_colors");
    const icon = document.querySelector("#icon");
    const webLogo = document.querySelector("#logo");

    icon.src="assets/imgs/sun.png";
    icon.alt="sunIcon";
    // webLogo.src="assets/imgs/whiteLogo.png";
    // webLogo.alt="whiteLogo";
}
