export class Reflow_ImpropperSyntax           extends Error {}
export class Reflow_MissingPromise            extends Error {}
export class Reflow_MissingActionFunction     extends Error {}
export class Reflow_MissingRequiredParameter  extends Error {}

/**
 *  Importable function that can be used via ES6 default function parameters' syntax to throw an error when a required parameter is not provided as an argument to a function. 
 * 
 *  Example: 
 * 
 *  import { required } from '../errors.js'
 * 
 *  function someFunc(param1, param2=required('Param2')) {
 *    // Do something!
 *  }
 * 
 *  @param {String} param - The name of the required parameter
 *  @throws {Error} Reflow_MissingRequiredParameter - Error detailing the name of the missing parameter;
 */

export function required(param) {
  throw new Reflow_MissingRequiredParameter(param);
}