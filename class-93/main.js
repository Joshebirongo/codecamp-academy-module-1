const title = document.getElementById("classEx");
const paragraph = document.getElementById("paragraph");
const button = document.getElementById("changeText");

const defaultTitle = title.textContent;
const defaultParagraph = paragraph.textContent;

let changed = false;

button.addEventListener("click", function () {
  if (changed === false) {
    title.textContent = "Class Attending successfully!";
    paragraph.textContent = "Now I'm good with DOM";

    changed = true;
  } else {
    title.textContent = defaultTitle;
    paragraph.textContent = defaultParagraph;

    changed = false;
  }
});
