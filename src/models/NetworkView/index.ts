import { View } from './View'
import { VisualMappingFucntion } from '../VisualMapping/VisualMappingFunction'
import { VisualStyle } from '../VisualMapping/VisualStyle'

export interface NetworkView {
  nodeViews: View[]
  edgeViews: View[]

  // Update the view object with the given visual style
  update: (style: VisualStyle) => void
}
