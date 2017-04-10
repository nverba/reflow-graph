export const validateFlowDataMiddleware = next => action => {

  /** 
   *  Intercept invalid responses and reflow to 'onError' flow.
   *  If using with the flowData middleware, this should be to the right of it in the middleware array.
   *  i.e. middlewares = [flowDataMiddleware, validateFlowDataMiddleware]
   */

  let invalidAction = action.hasOwnProperty('validate') && !action.validate;

  let result = next(invalidAction ? Object.assign({}, action, {
    action: 'pushFlow',
    flow: action.onError
  }) : Object.assign(action, { action: action.validate ? 'skipFlow' : action.action }));

  return invalidAction ? new Promise((resolve, reject) => reject()) : result;
}