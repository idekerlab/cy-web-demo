import { Node } from './Node'
import { Edge } from './Edge'

export interface NetworkModel {
  id: BigInt
  nodes: Node[]
  edges: Edge[]
}
