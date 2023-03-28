import React, { CSSProperties } from 'react';
import { useMemo } from 'react';
import DesktopEmptyNet from './empty-net/empty-net';
import DesktopFilledNet from './filled-net/filled-net';

import { fillNetWithApplicationsOrEmptyFields, getNetStyles } from './helpers';
import {
  NetDimensions,
  DesktopApplication,
  DesktopApplicationNet,
  NetApplicationTypes,
} from './models';
import { DEFAULT_NET_DIMENSION } from './constants';

import styles from './desktop.module.scss';

export interface DesktopProps {
  applications: DesktopApplication[];
  netDimensions?: NetDimensions;
}

export const Desktop = ({
  applications,
  netDimensions = DEFAULT_NET_DIMENSION,
}: DesktopProps) => {
  const { x, y } = netDimensions;

  const netWithApplications = useMemo(() => {
    return fillNetWithApplicationsOrEmptyFields(applications, netDimensions);
  }, [applications, netDimensions]);

  const netStyles: CSSProperties = getNetStyles(x, y);

  return (
    <div className={styles.container} style={netStyles}>
      {netWithApplications.map((application: DesktopApplicationNet, index) => {
        const { type } = application;

        if (type === NetApplicationTypes.EMPTY) {
          return <DesktopEmptyNet key={index} />;
        }

        return <DesktopFilledNet {...application} key={index} />;
      })}
    </div>
  );
};
