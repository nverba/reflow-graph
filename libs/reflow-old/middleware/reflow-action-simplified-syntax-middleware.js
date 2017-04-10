export const simplifiedReflowSyntaxMiddleware = next => action => {

  /**
   *  Syntactic sugar for writing flows:
   *  Transforms flow steps with a 'reflow' property.
   * 
   *  { reflow: 'someNewFlow' }
   *    is equivalent to: 
   *  { action: 'pushFlow', flow: 'someNewFlow', reflow: 'someNewFlow' }
   */

  return next(action.reflow ? Object.assign(action, {
    action: 'pushFlow',
    flow: action.reflow
  }) : action);
}