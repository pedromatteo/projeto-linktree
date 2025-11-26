function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Pegar a imagem
  const img = document.querySelector("#profile img");

  // Substituir a imagem conforme o modo
  if(html.classList.contains('light')) {
    img.setAttribute("src", "assets/alanzoka.light.png");
  } else {
    img.setAttribute("src", "assets/alanzoka.dark.jpg");
  }
}
