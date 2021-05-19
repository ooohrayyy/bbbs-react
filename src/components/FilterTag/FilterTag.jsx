function FilterTag({ tagName, tagActive, id }) {
  let classButton = '';
  if (tagActive) {
    classButton = 'button tags__button tags__button_active';
  } else {
    classButton = 'button tags__button';
  }

  return (
    <li className="tags__list-item" key={id}>
      <button className={classButton} type="button">
        {tagName}
      </button>
    </li>
  );
}

export default FilterTag;
