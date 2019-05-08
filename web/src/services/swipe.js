export function addSwipeListeners(onLeftSwipe, onRightSwipe) {
  let xDown = null;
  let yDown = null;

  const getTouch = (event) => event.touches ? event.touches[0] : event;

  function handleTouchStart(event) {
    const touch = getTouch(event);
    xDown = touch.clientX;
    yDown = touch.clientY;
  }

  function handleTouchMove(event) {
    if (!xDown || !yDown) { return }

    const touch = getTouch(event)

    const xUp = touch.clientX;
    const yUp = touch.clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if ( xDiff > 0 ) {
        onLeftSwipe();
      } else {
        onRightSwipe();
      }
    }

    xDown = null;
    yDown = null;
  }

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('mousedown', handleTouchStart, false);
  document.addEventListener('mouseup', handleTouchMove, false);
}
