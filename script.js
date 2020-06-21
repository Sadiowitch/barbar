// TODO: [BUG] - if you open the hamburger menu on mobile, then resize screen to width over 767 while the menu is still open, then resize again, the navbar is still display:flex rather than block.

let navLink = document.querySelectorAll(".nav-link:not(:first-child)");
let navbar = document.getElementById("navbar");
let icon = document.querySelector(".icon");

var onresize = function(e) {
  width = window.innerWidth;
  if (width > 767) {
    for (var i = 0; i < navLink.length; i++) {
    navLink[i].style.display = "flex";
    }
  } else if (width < 768) {
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.display = "none";
    }
  }
}

window.addEventListener("resize", onresize);

function openMenu() {
    for (var i = 0; i < navLink.length; i++) {
        if (navLink[i].style.display === "block") {
            navLink[i].style.display = "none";
            navbar.classList.toggle("responsive");
            icon.innerHTML = '<i class="fa fa-bars"></i>'
            
          } else {
            navLink[i].style.display = "block";
            navbar.classList.toggle("responsive");
            icon.innerHTML = '<i class="fas fa-times"></i>';
          }
    }
}

