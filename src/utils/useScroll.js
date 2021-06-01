function useScroll(ref, position, setPosition, direction, pixels = 300) {
  function scrollRight() {
    ref.current.scroll(position + pixels, 0);

    let newPosition;

    if (position + pixels > ref.current.offsetWidth) {
      newPosition = ref.current.offsetWidth;
    } else {
      newPosition = position + pixels;
    }

    setPosition(newPosition);
  }

  function scrollLeft() {
    ref.current.scroll(position - pixels, 0);

    let newPosition;

    if (position - pixels <= 0) {
      newPosition = 0;
    } else {
      newPosition = position - pixels;
    }

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
