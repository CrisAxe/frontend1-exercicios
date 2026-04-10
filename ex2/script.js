const nomeGuardado = localStorage.getItem("nome");

if (nomeGuardado) {
  console.log("Nome guardado:", nomeGuardado);
}

const form = document.getElementById("form-nome");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value;

  localStorage.setItem("nome", nome);

});


let theme = localStorage.getItem("theme") 
let themebutton = document.getElementById("theme-button");

theme ?(themebutton.innerText = theme) : (themebutton.innerText = "light");

themebutton.addEventListener("click", function() {
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    theme = "dark";
    themebutton.innerText = "dark";
  }else{
    localStorage.setItem("theme", "light");
    theme = "light";
    themebutton.innerText = "light";
  }
});

function registar() {
  const username = document.getElementById("nome").value;
  const password = document.getElementById("nota").value;
  localStorage.setItem("nome","nota");
}

