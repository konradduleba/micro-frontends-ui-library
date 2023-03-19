import React, { PropsWithChildren } from 'react';
import { Card } from '@konradduleba/library-ui.components.card';

import styles from './page-layout.module.scss';

export type PageLayoutProps = PropsWithChildren<{
  title: string;
}>;

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main className={styles.wrapper}>
      <Card>{title}</Card>
      {children}
    </main>
  );
};
