let flowData = new Map();

export const flowDataMiddleware = next => action => {

  Object.keys(action).forEach(key => {
    if (typeof action[key] === 'function') {
      action[key] = action[key](flowData)
    };
  });

  let result = next(action);

  if (action.to) {
    if (result.then) {
      result.then(response => {
        flowData.set(action.to, response);
      });
    } else {
      flowData.set(action.to, result)
    }
  }

  return result
}