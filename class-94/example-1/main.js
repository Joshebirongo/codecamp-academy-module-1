const body = document.body;
const btn = document.getElementById("toggleBtn");
let darkMode = false;
/*
btn.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        //code for dark mode
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        //code for ligh mode
        body.classList.remove("dark");
        body.classList.add("light");
    }
});

*/

//Try Second Method

btn.addEventListener("click", function () {
  if (!darkMode) {
    //code for darkMode
    body.classList.remove("light");
    body.classList.add("dark");
    darkMode = true;
  } else {
    //code for Light Mode
    body.classList.remove("dark");
    body.classList.add("light");
    darkMode = false;
  }
});
