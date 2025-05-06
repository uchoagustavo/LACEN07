const ClaroEscuroButton = document.getElementById("ClaroEscuro");

ClaroEscuroButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    ClaroEscuroButton.textContent = "Modo Claro";
  } else {
    ClaroEscuroButton.textContent = "Modo Escuro";
  }
});
