export const getItemsArray = ({ items, groups }) => {
  return groups?.flatMap(group => Object.values(group.items)).map(items => items) || Object.values(items || {}) || [];
};

export const getItemsObject = ({ items, groups }) => {
  return items ?? groups.reduce((obj, group) => Object.assign(obj, group.items), {});
};
