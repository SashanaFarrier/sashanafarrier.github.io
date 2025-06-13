gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close")
const LIs = Array.from(header.getElementsByTagName("li"));
let isActive = false;

hamburgerMenu.addEventListener("click", toggleNav);
closeMenu.addEventListener("click", toggleNav);

document.addEventListener('DOMContentLoaded', function() {
    const headerBar = document.querySelector(".header-bar");
    
    var initialWidth = header.clientWidth;
  
    window.addEventListener('scroll', function() {
      var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
     
        let newWidth;
      if(scrollPercentage > 0) {
        const ULs = Array.from(document.querySelectorAll("header ul"));
        // ULs.forEach(ul => ul.style.display = "none")
        newWidth = initialWidth * (1 - scrollPercentage);
      } else {
        newWidth = initialWidth * (1 + scrollPercentage);
      }

      headerBar.style.width = newWidth + 'px';

      if(this.window.scrollY > 1500) {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.opacity = "0.8"
      } else {
        header.style.position = "";
        header.style.top = "";
        header.style.opacity = ""
      }
    });
  });

//reset form after submission
    window.onload = function() {
        document.getElementById("contact-form").reset();
        console.log(header)
    };

function toggleNav() {
  isActive = !isActive;

  if(isActive) {
    nav.classList.add("active");
    document.body.style.overflowY = "hidden";
  } else {
    nav.classList.remove("active");
    document.body.style.overflowY = "scroll";
  }
}

LIs.forEach(el => el.addEventListener("click", () => {
  nav.classList.remove("active");
  document.body.style.overflowY = "scroll";
}))

    