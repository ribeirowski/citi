var flag = 0;
function darkMode() {
    var elemento_body = document.body;
    var elemento_menu = document.getElementsByClassName("menu");
    var elemento_p = document.getElementsByClassName("text-p");
    var elemento_gift_name = document.getElementsByClassName("gift-name");
    var elemento_gift_price = document.getElementsByClassName("gift-price");
    var elemento_item = document.getElementsByClassName("item");
    var elemento_theme_button = document.getElementsByClassName("theme-mode");
    elemento_body.classList.toggle("dark-mode-body");
    for (var i = 0; i < elemento_menu.length; i++){
        elemento_menu[i].classList.toggle("dark-mode-menu");
    }
    for (var i = 0; i < elemento_p.length; i++){
        elemento_p[i].classList.toggle("dark-mode-p");
    }
    for (var i = 0; i < elemento_item.length; i++){
        elemento_item[i].classList.toggle("dark-mode-item");
    }
    for (var i = 0; i < elemento_theme_button.length; i++){
        elemento_theme_button[i].classList.toggle("dark-theme-mode");
    }
    if (flag == 0){
        for (var i = 0; i < elemento_gift_name.length; i++){
            elemento_gift_name[i].style.color = "#C2BDBD";
            elemento_gift_price[i].style.color = "#F3F2F2";
        }
        changeImageLight('change-theme');
        flag++;
    } else {
        for (var i = 0; i < elemento_gift_name.length; i++){
            elemento_gift_name[i].style.color = "#5D5656";
            elemento_gift_price[i].style.color = "#282525";
        }
        changeImageDark('change-theme');
        flag = 0;
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