import React from 'react';
import { render} from '@testing-library/react';
import {MoviesGrid} from './MoviesGrid';
import * as MoviesUtil from '../../utils/MoviesUtil';

describe('MoviesGrid', () => {
  it('renders properly', () => {
    const {container} = render(<MoviesGrid selectedCategory='BUTTON1' />);
    expect(container).toBeTruthy();
  });

  it('onCategory should work', () => {
    jest.mock('../../utils/MoviesUtil');
    jest.spyOn(MoviesUtil, 'getMovies');
    const {container} = render(<MoviesGrid selectedCategory='BUTTON1' />);
    expect(MoviesUtil.getMovies).toHaveBeenCalledWith('BUTTON1');
  });

});