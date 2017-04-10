import Snap from './node_modules/snapsvg/dist/snap.svg.js'
import * as sourceFlows from './sample/export-flows.js'

var reflowGraph = Snap("#reflow");

var bigCircle = reflowGraph.circle(150, 150, 100); 

export function parseFlows(flows, entryPoint) {
  
}

parseFlows(sourceFlows, 'appLoadingFlow');

export const addColumn = () => {
  return reflowGraph
}
