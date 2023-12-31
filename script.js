function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* uma forma mais dificil de de fazer 
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } 
  */

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adiciona imagem light
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar2.png")
  }
}
