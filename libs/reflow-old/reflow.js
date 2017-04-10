import { randomNumber } from './scripts/random-number.js'
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
    id:    randomNumber(2000000000),
    steps: flowCreatorFn(action)
  }
}

function stepFlow(stack, actionFn) {

  if (!stack[0]) { return }
  let step = next(stack[0].steps);
  if (step.inProgress) { return }

  if (step.done) {
    stack.shift();
    return stepFlow(stack, actionFn);
  }

  Object.assign(step.value, { pass: 'in-progress' });
  let promises = Promise.all((step.value.actions || [step.value]).map(action => {
    var actionPromise = actionFn(action);
    return actionPromise;
  })).then(response => {
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