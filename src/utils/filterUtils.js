function getFilteredTags(tag, selectedTags) {
  return selectedTags.map((i) => ({ ...i, active: i.name === tag.name }));
}

export default getFilteredTags;
