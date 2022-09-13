import { Node } from './Node'
import { Edge } from './Edge'
import { NetworkModel } from './NetworkModel'

/**
 * The network object.
 * 
 * Internal implementation may vary.
 */
export abstract class Network {

  private _model: NetworkModel

  constructor(model: NetworkModel) {
    this._model = model
  }
  
  addNodes = (nodes: Node[]): void => {}
  deleteNodes = (nodes: Node[]): void => {}

  addEdges = (edges: Edge[]): void => {}
  deleteEdges = (edges: Edge[]): void => {}

}
