import addBookReducer from '../reducer';

describe('addBookReducer', () => {
  it('returns the initial state', () => {
    expect(addBookReducer(undefined, {})).toEqual({});
  });
});
