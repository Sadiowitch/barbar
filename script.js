function openMenu() {
    let x = document.querySelectorAll(".nav-link:not(:first-child)");
    let navbar = document.getElementById("navbar");
    let icon = document.querySelector(".icon");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
            navbar.classList.remove("responsive");
            icon.innerHTML = '<i class="fa fa-bars"></i>'
            
          } else {
            x[i].style.display = "block";
            navbar.classList.add("responsive");
            icon.innerHTML = '<i class="fas fa-times"></i>';
          }
    }
  }