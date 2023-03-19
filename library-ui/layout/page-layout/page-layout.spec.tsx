import React from 'react';
import { render } from '@testing-library/react';
import { BasicPageLayout } from './page-layout.composition';

it('should render with the correct text', () => {
  const rendered = render(<BasicPageLayout />);
  expect(rendered).toBeTruthy();
});
