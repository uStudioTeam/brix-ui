export function reverseDirection(direction) {
  return {
    row: 'column',
    column: 'row',
  }[direction];
}
