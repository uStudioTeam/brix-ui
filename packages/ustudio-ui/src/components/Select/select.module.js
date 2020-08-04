export const includesQuery = (string, query) =>
  query ? string.toLowerCase().includes(query.trim().toLowerCase()) : true;

export const filterItems = (items, query) => {
  return query ? Object.values(items).filter((item) => includesQuery(item.label, query)) : Object.values(items);
};

export const filterGroups = (groups, query) => {
  return groups.filter((group) => filterItems(group.items, query).length || includesQuery(group.title, query));
};

export const getItemsArray = ({ items, groups, query }) => {
  if (groups) {
    return filterGroups(groups, query).flatMap((group) => filterItems(group.items, query));
  }

  if (items) {
    return filterItems(items, query);
  }

  return [];
};

export const getItemsObject = ({ items, groups }) => {
  return items ?? groups.reduce((obj, group) => Object.assign(obj, group.items), {});
};
