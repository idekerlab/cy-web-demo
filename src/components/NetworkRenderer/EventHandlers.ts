import { Edge } from '../../models/Network/Edge'
import { Node } from '../../models/Network/Node'

/**
 * Collection of event handlers FROM the network renderer
 */
export interface EventHandlers {
  onNodeClick: (node: Node) => void
  onEdgeClick: (edge: Edge) => void

  // More handlers will be added here...
}
