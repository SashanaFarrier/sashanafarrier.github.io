gsap.registerPlugin(gsap);


document.addEventListener('DOMContentLoaded', function() {
    const headerBar = document.querySelector(".header-bar");
    const header = document.querySelector("header");
    var initialWidth = header.clientWidth;
  
    window.addEventListener('scroll', function() {
      var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
     
        let newWidth;
      if(scrollPercentage > 0) {
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