import { guid } from './utilities/global-unique-id.js'
import { ActionCreatorNotFound } from './errors.js'

function pushFlow(flowCreatorFn, stack, actionFn, action) {
  let flow = createFlow(flowCreatorFn, action);
  stack.unshift(flow);
  stepFlow(stack, actionFn);
}

function next(array) {
  let next = array.find(item => item.pass === 'in-progress' || !item.pass);
  return {
    done:        next === undefined,
    inProgress: !!next && !!next.pass,
    value:      !!next && next
  }
}

function createFlow(flowCreatorFn, action) {
  return {
    name:  action.flow,
    id:    guid(),
    steps: flowCreatorFn(action)
  }
}

function stepFlow(stack, actionFn) {

  let flow = stack[0];

  if (flow === undefined) { return }

  let step = next(flow.steps);

  if (step.inProgress == true) { return }

  if (step.done) {
    stack.shift();
    return stepFlow(stack, actionFn);
  }

  Object.assign(step.value, { pass: 'in-progress' });

  let actions = (step.value.actions || [step.value]);

  Promise.all(actions).map(action => actionFn(action)).then(response => {
    Object.assign(step.value, { pass: true });
    stepFlow(stack, actionFn);
  });
}

/**
 *  Main export
 */

export const createFlowStack = function (flowCreatorFn, actionFn) {

  const stack = [];

  return {
    pushFlow(action) {
      pushFlow(flowCreatorFn, stack, actionFn, action);
    }
  }
}
