import { GraphObject } from "./GraphObject"

export interface Edge extends GraphObject {
  s: string // Source node ID
  t: string // Target node ID
  type: string // Edge type ("interaction" in Cytoscape desktop)
}

