const images = document.querySelectorAll(".image");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");
const closeBtn = document.querySelector(".close-btn");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;
// When image is clicked
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
     currentIndex = index;
    popup.classList.add("active");
  });
});

// When close button is clcked
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
// When user clicks outside image
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
  leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImage.src = images[currentIndex].src;
});

// Next arrow
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImage.src = images[currentIndex].src;
});

});


