gsap.registerPlugin(gsap);


document.addEventListener('DOMContentLoaded', function() {
    const headerBar = document.querySelector(".header-bar");
    const header = document.querySelector("header");
    var initialWidth = header.clientWidth;
  
    window.addEventListener('scroll', function() {
      var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
     
        let newWidth;
      if(scrollPercentage > 0) {
        const ULs = Array.from(document.querySelectorAll("header ul"));
        ULs.forEach(ul => ul.style.display = "none")
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

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const intersecting = entry.isIntersecting
//     entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
//   })
// })

// observer.observe(document.querySelector(".grid-section"))

//reset form after submission
    window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("contact-form").reset();
    };

    const tl = gsap.timeline();

    const hamburgerMenus = Array.from(document.querySelectorAll(".hamburger"));
    hamburgerMenus.forEach(icon => {
      icon.addEventListener("click", (e)=> {
      const UL = e.currentTarget.parentElement.querySelector("ul");
      if(UL.style.display == "block") {
        UL.style.display = "none"
      } else {
          UL.style.display = "block";
          const LIs = Array.from(UL.querySelectorAll("li"))
          
          LIs.forEach((li, index) => {
            tl.fromTo(li, {
              opacity: 0,
              y: 0
            }, {
              ease: "bounce.out",
              opacity: 1,
              y: 10,
              duration: 0.2, 
              delay: index * 0.1 
            });
        });
      }
     
   
    });

    });