let totalPages;
let currentPage = 1;

function handleKeyPress(event) {
  if (event.key === "ArrowRight") {
    nextPage();
  } else if (event.key === "ArrowLeft") {
    prevPage();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

function updatePage() {
  const transformValue = `translateX(-${(currentPage - 1) * 100}%)`;
  document.body.style.transform = transformValue;
}

document.addEventListener("DOMContentLoaded", function () {
  totalPages = document.querySelectorAll(".page").length;

  document.addEventListener("keydown", handleKeyPress);
});


