import React, { PropsWithChildren } from 'react';

import styles from './bimbows-window.module.scss';

export type BimbowsWindowProps = PropsWithChildren<{}>;

export const BimbowsWindow = ({ children }: BimbowsWindowProps) => {
  return <div className={styles.window}>{children}</div>;
};
