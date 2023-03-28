import React from 'react';
import { Desktop } from './desktop';
import { BimbowsWindow } from '@konradduleba/library-ui.layout.bimbows-window';
import { MOCKED_DESKTOP_APPLICATIONS } from './constants';

export const BasicDesktop = () => {
  return (
    <BimbowsWindow>
      <Desktop applications={MOCKED_DESKTOP_APPLICATIONS} />
    </BimbowsWindow>
  );
};
