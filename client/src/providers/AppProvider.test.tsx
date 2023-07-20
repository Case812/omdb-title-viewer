import React from 'react';
import { render} from '@testing-library/react';
import {AppProvider} from './AppProvider';

describe('AppProvider', () => {

  it('renders properly', () => {
    const {container} = render(<AppProvider children={[]} />);
    expect(container).toBeTruthy();
  });
})
