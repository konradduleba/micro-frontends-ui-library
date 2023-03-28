import React from 'react';
import { NetWithApplication } from '../models';

import styles from './filled-net.module.scss';

const DesktopFilledNet = ({
  icon,
  name,
}: Pick<NetWithApplication, 'name' | 'icon'>) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={icon} />
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};

export default DesktopFilledNet;
