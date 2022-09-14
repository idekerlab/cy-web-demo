import { Node } from './Node'
import { Edge } from './Edge'

/**
 * The network object.
 * 
 * Internal implementation may vary.
 */
export interface Network {
  
  getNodes: () => Node[]
  getEdges: () => Edge[]

  // addNodes: (nodes: Node[]) => void
  // deleteNodes: (nodes: Node[]) => void

  // addEdges: (edges: Edge[]) => void
  // deleteEdges: (edges: Edge[]) => void

  // Utility functions

}
