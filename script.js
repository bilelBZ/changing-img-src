function btn() {
  let image = document.getElementById("image");
  let images = ["./images/html.png", "./images/css.png", "./images/js.png"];
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}
