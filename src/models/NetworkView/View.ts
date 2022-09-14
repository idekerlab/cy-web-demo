import { VisualProperty } from './VisualProperty'

export interface View {
  readonly key: string // Associated model ID (e.g. Node ID)
  visualProperties: VisualProperty<unknown>[]
}
