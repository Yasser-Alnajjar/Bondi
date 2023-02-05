let shuffle = document.querySelectorAll(".shuffle li");
let imgBox = Array.from(document.querySelectorAll(".img_box"));
shuffle.forEach((li) => {
  li.addEventListener("click", function () {
    shuffle.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
  li.addEventListener("click", function () {
    imgBox.forEach((img) => {
      // img.style.display = "none";
      img.style.cssText = `
       transform: scale(0);
       visibility: hidden;
      `;
    });
    document.querySelectorAll(this.dataset.work).forEach((img) => {
      // img.style.display = "block";
      img.style.cssText = `
      display:block;
      visibility: visible;
      transform: scale(1);
      `;
    });
  });
});
/* navbar */
let navlink = document.querySelectorAll(".nav-bar-link li a");
navlink.forEach((li) => {
  li.addEventListener("click", function () {
    navlink.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
});
/* navbar */
