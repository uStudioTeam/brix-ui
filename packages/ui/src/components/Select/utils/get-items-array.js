export function getItemsArray({ items, groups }) {
  return groups?.flatMap(group => Object.values(group.items)).map(items => items) || Object.values(items || {}) || [];
}
