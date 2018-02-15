document.body.style.background = "rgb(255,127,0)";

window.addEventListener("click", mudarCor);

function mudarCor(girafaBebada){
  let x = girafaBebada.x;
  let y = girafaBebada.y;
  let msg = `X: ${x}, Y: ${y}`;
  console.log(msg);
}
