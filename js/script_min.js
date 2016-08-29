var link_search = document.querySelector(".link_for_form");
var form = document.querySelector(".form_hidden");


link_search.addEventListener("click", function(event) {
  if (form.classList.contains("form_hidden_show")) {
    event.preventDefault();
    form.classList.remove("form_hidden_show");
  } else {
    event.preventDefault();
    form.classList.add("form_hidden_show");
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (form.classList.contains("form_hidden_show")) {
      form.classList.remove("form_hidden_show");
    }
  }
});
