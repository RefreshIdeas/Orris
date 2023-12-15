export function accordianInit(accordianClass) {
  const questions = document.querySelectorAll(`${accordianClass}`);

  questions.forEach((element) => {
    element.addEventListener("click", () => {
      const nextBox = element.nextElementSibling;
      questions.forEach((acc) => acc.classList.remove("active"));
      if (nextBox.classList.contains("active")) {
        nextBox.classList.remove("active");
      } else {
        document
          .querySelectorAll(".accordian__content.active")
          .forEach((nextBox) => nextBox.classList.remove("active"));
        element.classList.add("active");
        document
          .querySelectorAll(".icon")
          .forEach((normal) => (normal.style.transform = "rotate(0deg)"));

        nextBox.classList.add("active");
      }
    });
  });
}
