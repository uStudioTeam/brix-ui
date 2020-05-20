const filterItems = (itemsToFilter, query) => {
  return query
    ? Object.fromEntries(
        Object.values(itemsToFilter)
          .filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
          .map((item) => [item.value, item])
      )
    : itemsToFilter;
};

export const getItemsArray = ({ items, groups, query }) => {
  return (
    groups?.flatMap((group) => Object.values(filterItems(group.items, query))).map((items) => items) ||
    Object.values(filterItems(items, query) || {}) ||
    []
  );
};

export const getItemsObject = ({ items, groups, query }) => {
  return (
    items ?? groups.reduce((obj, group) => Object.assign(obj, group.items), {})
  );
};
