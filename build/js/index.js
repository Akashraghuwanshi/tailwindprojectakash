const initApp = ()=>{
    const hamburgerBtn = document.getElementById('hamburger-button');
    // console.log(hamburgerBtn);
    const mobileMenu = document.getElementById('mobile-menu');
    // console.log(mobileMenu);
    
    const toggleMenu =()=>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        //  console.log(mobileMenu);
        hamburgerBtn.classList.toggle('toggle-btn')
        // console.log(hamburgerBtn);
    }
    hamburgerBtn.addEventListener('click',toggleMenu);
    mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)
