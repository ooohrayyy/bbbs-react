function useScroll(ref, position, setPosition, direction, pixels = 400) {
  function scrollRight() {
    let newPosition;

    if (
      position + pixels >=
      ref.current.scrollWidth - ref.current.offsetWidth
    ) {
      newPosition = ref.current.scrollWidth - ref.current.offsetWidth;
    } else {
      newPosition = position + pixels;
    }

    ref.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: 'smooth',
    });
    setPosition(newPosition);
  }

  function scrollLeft() {
    let newPosition;

    if (position - pixels <= 0) {
      newPosition = 0;
    } else {
      newPosition = position - pixels;
    }

    ref.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: 'smooth',
    });
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
