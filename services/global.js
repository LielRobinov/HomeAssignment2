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

    document.body.classList.toggle("dm_colors");

    if(document.body.classList.contains("dm_colors"))
    {
        icon.src="assets/imgs/sun.png";
        icon.alt="sunIcon";
        
    }
    else{
        icon.src ="assets/imgs/moon.png";
        icon.alt="moonIcon";
    }
}