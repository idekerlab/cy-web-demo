import { Table } from "../Table"


/**
 * A graph with property tables
 */
export interface PropertyGraph {
  getNodeTable: () => Table
  getEdgeTable: () => Table
}