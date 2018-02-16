let S = 100;
let L = 50;
let isLuz = true;

window.addEventListener("click", toggleLuz);

function toggleLuz(){
  isLuz = !isLuz;
}

window.addEventListener("mousemove", mudarCor);

function mudarCor(evt){
  let x = evt.x;
  let y = evt.y;
  let w = window.innerWidth;
  let h = window.innerHeight;

  let vertical = ~~((1-(y/h))*100);
  let hue = ~~((x/w)*360);

  if(isLuz){
    L = vertical;
  } else {
    S = vertical;
  }

  let cor = `hsl(${hue}, ${S}%, ${L}%)`
  document.body.style.background = cor;
  console.log(cor);
}
