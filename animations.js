let typed = new Typed(".auto-type", {
    strings: ["passion", "business", "projects", "brand"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

/* nav toggle */
function togglemenu() {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " nav--open";
    } else {
      x.className = "nav";
    }
    let element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
  }

  /* active state */
  function toggleactivestate() {
    let x = document.getElementsByClassName("nav-item")
    if (x.className === "nav-item") {
      x.classList.add('active');
    } else {
      x.classList.remove('active');
    }
  }