export function getGridTemplate({ direction, divideBy, cellsCount }) {
  if (direction === 'column') {
    return 'grid-auto-flow: row';
  }
  
  return `grid-template-columns: repeat(${divideBy * cellsCount}, 1fr)`;
}
