

const grid = document.querySelectorAll(".grid-offer div");
grid.forEach((item) => {
  item.addEventListener("mouseover", () => {
    grid.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});


