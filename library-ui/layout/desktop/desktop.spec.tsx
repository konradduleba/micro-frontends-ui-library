import React from 'react';
import { render } from '@testing-library/react';
import { BasicDesktop } from './desktop.composition';

it('should render with the correct text', () => {
  const rendered = render(<BasicDesktop />);
  expect(rendered).toBeTruthy();
});
