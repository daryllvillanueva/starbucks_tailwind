const starNav = document.querySelectorAll(".coffee_nav_link");
const starContent = document.querySelectorAll(".coffee_item");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
    starContent.forEach((content) => {
      content.classList.remove("active");
    });
}


const burger = document.querySelector(".burger_menu");
const header_action = document.querySelector(".header_action");

burger.addEventListener("click", () =>{
    header_action.classList.toggle("open");
    burger.classList.toggle("open");
})

const links = document.querySelectorAll(".links_item h4");

links.forEach((link) => {
    link.addEventListener("click", () => {
        link.querySelector("i").classList.toggle("open");
        link.nextElementSibling.classList.toggle("open");
    });
});

