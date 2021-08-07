function handleMouse(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);
}
// function handleMouse({clientX, clientY}){
//  console.log(clientX, clientY);
//}
document.addEventListener('click', handleMouse);
