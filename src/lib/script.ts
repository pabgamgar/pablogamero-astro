let activeIndex = 0;

let articles = document.querySelectorAll("article") as NodeListOf<HTMLElement>;

let buttons = document.querySelectorAll(
  "button.nav"
) as NodeListOf<HTMLButtonElement>;

for (var i = 0, size = buttons.length; i < size; i++) {
  buttons[i].addEventListener(
    "click",
    function (i: number) {
      handleClick(i);
    }.bind(null, i)
  );
}

function handleClick(index: number) {
  // Bump the active index
  const nextIndex = index;

  articles[activeIndex].dataset.status = "inactive";
  articles[nextIndex].dataset.status = "active";

  buttons[activeIndex].dataset.status = "inactive";
  buttons[nextIndex].dataset.status = "active";

  activeIndex = nextIndex;
  console.log(activeIndex);
}
