import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addBook state domain
 */

const selectAddBookDomain = state => state.get('addBook', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddBook
 */

const makeSelectAddBook = () =>
  createSelector(selectAddBookDomain, substate => substate.toJS());

export default makeSelectAddBook;
export { selectAddBookDomain };
