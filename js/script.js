// const canvas = document.querySelector(".canvas");
// var ctx = canvas.getContext("2d");
// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerHeight;

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// const radius = 50;

// // document.querySelector(".landing").addEventListener("mousemove", e => {
// //   var posX = e.clientX;
// //   var posY = e.clientY;
// //   console.log(posX, posY);

// //   let g = ctx.createRadialGradient(posX, posY, 10, posX, posY, radius);
// //   g.addColorStop(0, "rgba(255, 255, 255, 0)");
// //   g.addColorStop(1, "rgba(255, 255, 255, 1)");
// //   ctx.fillStyle = g;
// //   ctx.clearRect(posX - radius, posY - radius, radius * 2, radius * 2);
// //   ctx.fillRect(posX - radius, posY - radius, radius * 2, radius * 2);

// // ctx.save();
// // ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
// // ctx.clip();
// // ctx.clearRect(posX - radius, posY - radius, 100, 100);
// // ctx.restore();
// // });

// Spray paint shtuff ;_;

$("#wall").eraser({ size: 50 });

// Nav toggle coode

const hamburgerToggle = document.querySelector(".hamburger__toggle");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

// Active nav stuff

const nav = document.querySelector(".nav");
const landing = document.querySelector(".landing");

const landingObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.remove("nav--active");
      } else {
        nav.classList.add("nav--active");
      }
    });
  } //,
  // {
  // rootMargin: "-100px"
  // }
);

landingObserver.observe(landing);

// Gif replacement code

// const gif = document.querySelector(".logo__gif");
// const image = document.querySelector(".logo__img");
// const logoSection = document.querySelector("section.logo");

// const gifObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log("asd");

//       image.classList.add("hide");
//       gif.classList.remove("hide");
//       observer.unobserve(entry);
//     }
//   });
// });

// gifObserver.observe(logoSection);

hamburgerToggle.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--close");
  navList.classList.toggle("nav__list--open");
});

const navItems = document.querySelectorAll(".nav__item");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("hamburger--close");
    navList.classList.remove("nav__list--open");
  });
});
