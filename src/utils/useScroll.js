function useScroll(ref, position, setPosition, direction, pixels = 300) {
  function scrollRight() {
    let newPosition;

    if (position + pixels >= ref.current.offsetWidth) {
      newPosition = ref.current.offsetWidth;
    } else {
      newPosition = position + pixels;
    }

    ref.current.scrollTo(newPosition, 0);
    setPosition(newPosition);
  }

  function scrollLeft() {
    let newPosition;

    if (position - pixels <= 0) {
      newPosition = 0;
    } else {
      newPosition = position - pixels;
    }

    ref.current.scrollTo(newPosition, 0);
    setPosition(newPosition);
  }

  if (direction === 'left') {
    return scrollLeft;
  }

  if (direction === 'right') {
    return scrollRight;
  }

  return undefined;
}

export default useScroll;
