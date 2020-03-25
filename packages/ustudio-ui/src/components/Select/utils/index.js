const getItemsArray = ({ items, groups }) => {
  return groups?.flatMap(group => Object.values(group.items)).map(items => items) || Object.values(items || {}) || [];
};

const getItemsObject = ({ items, groups }) => {
  return items ?? groups.reduce((obj, group) => Object.assign(obj, group.items), {});
};

export const selectUtils = { getItemsArray, getItemsObject };
