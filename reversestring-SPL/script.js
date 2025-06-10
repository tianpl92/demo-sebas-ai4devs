document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const modal = document.getElementById("myModal");
  const resultText = document.getElementById("resultText");
  const closeModalBtn = document.getElementById("closeModal");

  textInput.addEventListener("input", function () {
    const value = textInput.value;

    if (value.length > 3) {
      const reversed = value.split("").reverse().join("");
      resultText.innerText = reversed;
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
