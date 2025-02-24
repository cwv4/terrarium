function zIndex() {
  let zIndex = 6;
  return function getZIndex() {
    return ++zIndex;
  };
}

const getZIndex = zIndex();

function dragElement(terrariumElement) {
  let cursorChangeX = 0;
  let cursorChangeY = 0;
  let cursorPositionX = 0;
  let cursorPositionY = 0;
  let firstPress = true;

  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    cursorPositionX = e.clientX;
    cursorPositionY = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    cursorChangeX = cursorPositionX - e.clientX;
    cursorChangeY = cursorPositionY - e.clientY;
    cursorPositionX = e.clientX;
    cursorPositionY = e.clientY;

    terrariumElement.style.left =
      terrariumElement.offsetLeft - cursorChangeX + "px";
    terrariumElement.style.top =
      terrariumElement.offsetTop - cursorChangeY + "px";

    if (firstPress) {
      terrariumElement.style.zIndex = getZIndex();
      console.log(terrariumElement.style.zIndex);
      firstPress = false;
    }
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
    firstPress = true;
    console.log('e.clientX = ' + e.clientX);
    console.log('e.clientY = ' + e.clientY);
  }
}

dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));
