let navbarEffect = document.getElementById("navbar")
let navbarContainer = document.getElementById("navbarContainer")
window.onscroll = function () {
    if (scrollY >= 100) {
        navbarEffect.classList += " -translate-x-1/2 transition-all duration-300 left-1/2 right-1/2 ease-in-out w-full fixed -top-4  -translate-y-0 py-6 px-20 rounded-none z-20"
        navbarContainer.classList = ""
    }
    else{
        navbarEffect.classList = "flex justify-between items-center text-white w-8/12 mx-auto py-5 px-6 my-4 rounded-full shadow-lg bg-black"
    }
    
}

