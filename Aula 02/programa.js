document.body.style.background = "rgb(255,127,0)";

window.addEventListener("mousemove", mudarCor);

function mudarCor(girafaBebada){
  let h = window.innerHeight;
  let w = window.innerWidth;
  let x = girafaBebada.x;
  let y = girafaBebada.y;
  let msg = `X: ${x}, Y: ${y}, W: ${w}, H: ${h}`;
  console.log(msg);
}
