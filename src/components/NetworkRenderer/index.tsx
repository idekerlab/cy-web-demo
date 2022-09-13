import { useContext, useEffect } from 'react'
import { Edge } from '../../models/Network/Edge'
import { Node } from '../../models/Network/Node'
import { NetworkView } from '../../models/NetworkView'
import { AppContext } from '../../states/AppStateProvider'
import { EventHandlers } from './EventHandlers'

export interface NetworkViewerProps {
  networkView: NetworkView | null
}

export const NetworkRenderer = (props: NetworkViewerProps) => {

  const appContext = useContext(AppContext)


  const { networkView } = props

  // Default handler
  const eventHandlers: EventHandlers = {
    onNodeClick: (node: Node) => {
      console.log('onNodeClick', node)
    },
    onEdgeClick: (edge: Edge) => {
      console.log('onEdgeClick', edge)
    }
  }

  useEffect(() => {

    // Trigger update if necessary

  }, [networkView])

  return (
    <div>
      Current App State is: {JSON.stringify(appContext)}
    </div>
  )

}