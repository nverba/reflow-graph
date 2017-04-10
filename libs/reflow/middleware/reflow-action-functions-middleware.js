export const reflowFunctions = next => action => {

  // Resolve function values in flow steps

  Object.keys(action).forEach(key => {
    if (typeof action[key] === 'function') {
      action[key] = action[key]()
    };
  });

  let result = next(action);

  return result
}