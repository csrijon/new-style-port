document.addEventListener("DOMContentLoaded",() => {
  let menuicon = document.querySelector('.menu-icon');
menuicon.addEventListener("click",() => {
  let navmenu = document.querySelector(".nav-menu");
  navmenu.classList.toggle('active');
})
})

