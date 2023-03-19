import React from 'react';
import { render } from '@testing-library/react';
import { BasicBimbowsWindow } from './bimbows-window.composition';

it('should render with the correct text', () => {
  const rendered = render(<BasicBimbowsWindow />);
  expect(rendered).toBeTruthy();
});
