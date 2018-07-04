import { fromJS } from 'immutable';
import booksReducer from '../reducer';

describe('booksReducer', () => {
  it('returns the initial state', () => {
    expect(booksReducer(undefined, {})).toEqual(fromJS({}));
  });
});
