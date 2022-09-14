import cytoscape, { EdgeDefinition, Collection, NodeDataDefinition, NodeDefinition, SingularElementArgument } from 'cytoscape'
import { Network } from '.'
import { Table } from '../Table'
import { Column } from '../Table/Column'
import { Row } from '../Table/Row'
import { RowData } from '../Table/RowData'
import { Edge } from './Edge'
import { Node } from './Node'
import { PropertyGraph } from './PropertyGraph'


const TableType = {
  NODE: 'NODE',
  EDGE: 'EDGE'
} as const

type TableType = typeof TableType[keyof typeof TableType]

/**
 * Property grph containing both topology and tables (attributes)
 */
export class CyjsNetwork implements Network, PropertyGraph {
  // This is the Cytoscape.js instance containing the network and its attributes
  private _cyjs: any
  
  readonly id: string

  constructor(id: string) {
    this._cyjs = cytoscape()
    this.id = id
  }

  private toRow(data: NodeDataDefinition): Row {
    return {
      key: data.id as string,
      data: data as RowData,
    }
  }

  private toTable = (tableType: TableType): Table => {
    const elements = this._cyjs.elements()
    const graphObjects: Collection = tableType === TableType.NODE ? elements.nodes() : elements.edges()
    const columnNames: Set<string> = new Set()

    const rows: Row[] = []

    graphObjects.forEach((ele: SingularElementArgument)  => {
      Object.keys(ele.data).forEach(key => columnNames.add(key))
      const row = this.toRow(ele.data)
      rows.push(row)
    })

    // TODO: need actual type
    const columns: Column[] = Array.from(columnNames).map(name => ({ name, type: 'string' }))

    return {
      name: tableType === TableType.NODE ? 'nodes' : 'edges',
      rows,
      columns,
    }
  }

  getNodeTable() {
    return this.toTable(TableType.NODE)
  }
  
  getEdgeTable() {
    return this.toTable(TableType.EDGE)
  }

  getNodes(): Node[] {
    return this._cyjs.nodes().map((node: NodeDefinition) => ({
      id: node.data.id,
    }))
  }
  
  getEdges(): Edge[] {
    return this._cyjs.edges().map((edge: EdgeDefinition) => ({
      id: edge.data.id,
      s: edge.data.source,
      t: edge.data.target,
    }))
  }

  // Add more functions here...
}
