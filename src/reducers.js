import { data } from './data.js'

export function entries(state=[], action) {

  switch (action.type) {

    /**
     * Normally we would use [...action.data], but because we've imported the data object directly 
     * into the reducer instead of passing it with the action we can access the data object directly..
     * You should also use the same data object directly in your answers.
     * 
     * Remember, this is Redux!  DO NOT MUTATE THE ORIGINAL DATA!!! Always pass a clean copy of the data using common JavaScript methods.
     * See the 'ADD_ENTRIES' case bellow for one such example of a non mutating method.
     */

    case 'ADD_ENTRIES':
      return [...data];

    case 'FLUSH_ALL':
      return [];

    // case: 'ORDER_BY_AGE'

    // case: 'REVERSE_ORDER_BY_AGE'

    // case: 'ORDER_BY_TICKETS'

    // case: 'FILTER_ONLY_HATS'

    // case: 'FILTER_ONLY_SHIRTS'
  
    default:
      return state;
  }
}