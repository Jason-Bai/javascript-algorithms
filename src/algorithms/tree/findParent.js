const getParent = (list, childValue) => {
  if (!list || !list.length) return null;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (!element.children) {
      continue;
    }

    const children = element.children.filter(
      (child) => child.value === childValue
    );

    if (children.length) return element;

    return getParent(element.children, childValue);
  }

  return null;
};

module.exports = getParent;
