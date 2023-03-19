import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './card.module.scss';

export type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ children, className }: CardProps) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
};
