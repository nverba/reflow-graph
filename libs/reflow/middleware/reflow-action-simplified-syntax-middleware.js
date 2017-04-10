export const reflowSimplifiedSyntax = next => action => {

  /**
   *  Syntactic sugar for writing flows:
   *  Transforms flow steps with a 'reflow' property.
   *
   *  { reflow: 'someNewFlow' }
   *    is equivalent to:
   *  { action: 'pushFlow', flow: 'someNewFlow', reflow: 'someNewFlow' }
   */

  // console.log('action', action)
  // console.log('fullAction', action.reflow !== undefined ? Object.assign({}, action, {
  //   action: 'pushFlow',
  //   flow: action.reflow
  // }) : action)

  return next(action.reflow !== undefined ? Object.assign({}, action, {
    action: 'pushFlow',
    flow: action.reflow
  }) : action);
}