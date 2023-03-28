import { CSSProperties } from 'react';
import { Dimension } from '../models';

export const getNetStyles = (
  numberOfXRows: Dimension,
  numberOfYRows: Dimension
): CSSProperties => {
  return {
    gridTemplateColumns: `repeat(${numberOfXRows}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${numberOfYRows}, minmax(0, 1fr))`,
  };
};
