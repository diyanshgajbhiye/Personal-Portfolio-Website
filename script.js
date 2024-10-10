
// Hamburger Menu Open Close

function toggleMenu(){
    const menu=document.querySelector(".menu-links")
    const icon=document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
};

// Typing Text Profile

var typed = new Typed(".section_text_p2", {
    strings: [
        " ",
        "Content Creator",
        "Web Developer",  
        "Freelancer",
        "Music Producer", 
        "Youtuber"
    ],
    typeSpeed: 80,      
    backSpeed: 40,        
    startDelay: 300,      
    backDelay: 1000,      
    loop: true,           
});
