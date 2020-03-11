export function getItemsMap({ items, groups }) {
  return items ?? groups.reduce((obj, group) => Object.assign(obj, group.items), {});
}
