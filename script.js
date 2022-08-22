
let isOpen = false

function openMenu() {

    const openMobileMenuHTML = document.getElementById("openMobileMenu")
    let changeImg = document.getElementById("icon-menu")
    

    if (isOpen) {
        openMobileMenuHTML.style.display = "none" 
        changeImg.src = "styles/images/menu_icon.png";
        isOpen = false
      }

    else {
        openMobileMenuHTML.style.display = "flex" 
        changeImg.src = "styles/images/icon-cross.png";
        isOpen = true
      }
}

 