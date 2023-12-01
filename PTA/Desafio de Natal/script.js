var flag = 0;
function darkMode() {
    if (flag == 0){
        changeImageLight('change-theme');
        flag++;
    } else {
        changeImageDark('change-theme');
        flag = 0;
    }
    var element1 = document.body;
    var element2 = document.getElementsByClassName("menu");
    var element3 = document.getElementsByClassName("text-p");
    var element4 = document.getElementsByClassName("item");
    var element5 = document.getElementsByClassName("gift-name");
    var element6 = document.getElementsByClassName("gift-price");
    var element7 = document.getElementsByClassName("theme-mode");
    element1.classList.toggle("dark-mode-body");
    for (var i = 0; i < element2.length; i++){
        element2[i].classList.toggle("dark-mode-menu");
    }
    for (var i = 0; i < element3.length; i++){
        element3[i].classList.toggle("dark-mode-p");
    }
    for (var i = 0; i < element4.length; i++){
        console.log(element4[i]);
        element4[i].classList.toggle("dark-item");
    }
    for (var i = 0; i < element5.length; i++){
        element5[i].classList.toggle("dark-mode-gitf-name");
    }
    for (var i = 0; i < element6.length; i++){
        element6[i].classList.toggle("dark-mode-gitf-price");
    }
    for (var i = 0; i < element7.length; i++){
        element7[i].classList.toggle("dark-theme-mode");
    }
}

function changeImageDark(id) {
    var themeButton = document.getElementById(id);
    themeButton.src = "assets/moon-dark.png";
}

function changeImageLight(id) {
    var themeButton = document.getElementById(id);
    themeButton.src = "assets/moon-light.png";
}