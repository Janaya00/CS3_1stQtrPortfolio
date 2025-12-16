

function makeDraggable(element) {
let isDragging = false; 
let startY=0, startX=0, initialX=0, initialY=0;}
  element.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = element.offsetLeft;
    initialY = element.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }  );

  function onMouseMove(e) {
    if(!isDragging) return;
    element.style.top = initialY + (e.clientY - startY) + 'px';
    element.style.left = initialX + (e.clientX - startX) + 'px'; 
    element.style.position = 'absolute';  
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  const element = <img id="pic" src="freeplaymode.jpeg" width="200" />

  makeDraggable={element};
