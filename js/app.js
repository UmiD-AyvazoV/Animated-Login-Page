const login = document.querySelector(".login");

document.querySelector(".register").addEventListener("click", () => {
  login.classList.remove("change");
});

document.querySelector("#login").addEventListener("click", () => {
  login.classList.add("change");
});

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style='transition-delay: ${index * 70}ms'>${letter}</span>`
    )
    .join("");
});

const images = document.querySelectorAll(".form-control img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const input = img.nextElementSibling;
    const inputType = img.nextElementSibling.type;
    if (inputType === "password") {
      input.type = "text";
      img.src = "img/1.png";
    }
    if (inputType === "text") {
      input.type = "password";
      img.src = "img/2.png";
    }
  });
});