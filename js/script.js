document.addEventListener("DOMContentLoaded", () => {
  let menuicon = document.querySelector('.menu-icon');
  menuicon.addEventListener("click", () => {
    let navmenu = document.querySelector(".nav-menu");
    navmenu.classList.toggle('active');
    let navlink = document.querySelectorAll('.nav-menu a');
    navlink.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.style.scrollBehavior = 'smooth';
        navmenu.classList.remove('active');
      }
      )
    });
  })
})

