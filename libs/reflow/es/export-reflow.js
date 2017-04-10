import { createFlowStack } from '../reflow.js'
import { reflowData } from '../middleware/reflow-action-flow-data-middleware.js'
import { reflowFunctions } from '../middleware/reflow-action-functions-middleware.js'
import { reflowSimplifiedSyntax } from '../middleware/reflow-action-simplified-syntax-middleware.js'
import { reflowValidateFlowData } from '../middleware/reflow-action-validate-flow-data-middleware.js'
import { applyMiddleware } from '../reflow-apply-middleware.js'
import * as error from '../errors.js'

window.reflow = {
  createFlowStack,
  reflowData,
  reflowFunctions,
  reflowSimplifiedSyntax,
  reflowValidateFlowData,
  applyMiddleware,
  error
}