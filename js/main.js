function minMenuHandler() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector(".main-nav");
    if(innerWidth <= 426){
        mainNav.classList.toggle("hidden");
    }
    menuIcon.addEventListener("click",(e)=>{
        mainNav.classList.toggle("hidden");
    });
}

minMenuHandler();
