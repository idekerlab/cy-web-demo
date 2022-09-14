import { Network } from '../models/Network'
import { NetworkView } from '../models/NetworkView'
import { Table } from '../models/Table'
import { VisualStyle } from '../models/VisualMapping/VisualStyle'

// TOD: do not allow null
export interface ApplicationState {
  network: Network | null
  networkAttributes: Table | null// Maybe a custom object type?
  nodeTable: Table | null
  edgeTable: Table | null
  networkView: NetworkView | null
  visualStyle: VisualStyle | null
}
