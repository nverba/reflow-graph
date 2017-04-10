export const simplifiedTransitionReflowSyntaxMiddleware = next => action => {

  /**
   *  Syntactic sugar for writing transition flows:
   *  Transforms flow steps with a 'anime' property.
   * 
   *  { anime: {} }
   *    is equivalent to: 
   *  { action: 'transition', anime: {} }
   */

  return next(action.reflow ? Object.assign(action, {
    action: 'pushFlow',
    flow: action.reflow
  }) : action);
}