document.body.style.background = "hsl(0,100%,50%)";

//window.addEventListener("mousemove", mudarCor);

function mudarCor(girafaBebada){
  let h = window.innerHeight;
  let w = window.innerWidth;
  let x = girafaBebada.x;
  let y = girafaBebada.y;
  let msg = `X: ${x}, Y: ${y}, W: ${w}, H: ${h}`;

  let blue = ~~((1-(y/h))*255);
  let red = ~~((x/w)*255);
  document.body.style.background = `rgb(${red},0,${blue})`;
}
