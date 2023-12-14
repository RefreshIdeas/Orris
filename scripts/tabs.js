export let tabs = (tabButton, tabBlock) => {
  let tabButtons = document.querySelectorAll(tabButton);

  tabButtons.forEach((element) => {
    element.addEventListener("click", function (e) {
      let target = e.target.closest(`${tabButton}`);
      let dataset = target.dataset.tab;
      tabButtons.forEach((element) => {
        element.classList.remove("active");
      });
      target.classList.add("active");
      document.querySelectorAll(`${tabBlock}`).forEach((e) => {
        e.classList.remove("active");
      });
      document.querySelector(`#${dataset}`).classList.add("active");
    });
  });
};
