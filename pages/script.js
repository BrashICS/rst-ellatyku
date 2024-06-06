//event listeners
const img = document.getElementById('images');

let toggle = true;

img.addEventListener ("click", toggle_picture)


function toggle_picture() {
  //toggle
  toggle = !toggle;
  if (toggle) {
    img.src= "";
  }else {
    img.src = "../image.ball.png";
  }
img.src  = "../images.ball.png";
}

