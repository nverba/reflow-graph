import { createFlowStack } from '../libs/reflow/reflow.js'
import { applyMiddleware } from '../libs/reflow/reflow-apply-middleware.js'
import { reflowSimplifiedSyntax } from '../libs/reflow/middleware/reflow-action-simplified-syntax-middleware.js'
import { reflowFunctions } from '../libs/reflow/middleware/reflow-action-functions-middleware.js'
import { reflowData } from '../libs/reflow/middleware/reflow-action-flow-data-middleware.js'
import { reflowValidateFlowData } from '../libs/reflow/middleware/reflow-action-validate-flow-data-middleware'

import * as actionFns from './actions.js'
import * as flowFns from './flows.js'

const actionFn = (action) => {
  return actionFns[action.action](action, section)
}

const flowCreatorFn = (action) => {
  return flowFns[action.flow](action)
}

export const reflow = createFlowStack(flowCreatorFn, applyMiddleware(actionFn, [reflowSimplifiedSyntax, reflowFunctions, reflowData, reflowValidateFlowData]));