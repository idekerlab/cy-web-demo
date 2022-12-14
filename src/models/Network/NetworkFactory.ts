import { Network } from '.'
import { Row } from '../Table/Row'
import { CyjsNetwork } from './CyjsNetwork'
import { NetworkModel } from './NetworkModel'

export class NetworkFactory {
  /**
   * Create an empty Cytoscape.js network
   *
   * @param id
   * @returns
   */
  static createNetwork(id: string): Network {
    return new CyjsNetwork(id)
  }

  // Add more useful factory methods here. e.g. createNetworkFromCyjsJson()

  // Need CX2 type definition
  static createNetworkFromCx(cx: []): Network {
    // TODO: cx->model

    // UUID to string
    const id = 'fromUUID'
    const attr: Row = {
      key: id,
      data: {},
    }
    const model: NetworkModel = {
      id,
      attributes: attr,
      nodes: [],
      edges: [],
    }

    return new CyjsNetwork(id)
  }
}
