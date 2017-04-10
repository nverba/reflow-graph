import { reflow } from '../../reflow.js'

/**
 *  @param {Object} params - The action like object requires either a reflow flow param
 */

export function pushFlow(params) {
  return dispatch => {
    reflow.pushFlow(params);
  }
}