function assign(assignee, value) {
  return Object.assign({}, assignee, value);
}

function applyFrom(action, value) {
  return action.from !== undefined ? action.from(value) : value;
}

export const reflowData = next => action => {

  let result  = next(action);
  let promise = result && result.then !== undefined;

  // action.to directly assigns the return value of the executing flowAction

  if (action.to !== undefined) {
    if (promise) {
      result.then(response => {
        action.to = applyFrom(action, response);
      });
    } else {
      action.to = applyFrom(action, result);
    }
  }

  // action.assign assigns the return value of the executing flowAction to the passed object

  if (action.assign !== undefined) {
    if (promise) {
      result.then(response => {
        assign(action.assign, action.as ? { [action.as]: applyFrom(action, response) } : applyFrom(action, response));
      });
    } else {
      assign(action.assign, applyFrom(action, result));
    }
  }

  return result
}