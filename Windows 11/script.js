let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
taskbar.addEventListener("click", () => {
    console.log("Clicked");
    if (startmenu.style.bottom == "30px") {
        startmenu.style.bottom = "-655px";
    }
    else {
        startmenu.style.bottom = "30px";
    }
})