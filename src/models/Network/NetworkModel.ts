import { Node } from './Node'
import { Edge } from './Edge'
import { Row } from '../Table/Row'

export interface NetworkModel {
  id: string
  attributes: Row // Or special object??
  nodes: Node[]
  edges: Edge[]
}
