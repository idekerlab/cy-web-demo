import { Row } from "../Table/Row"

export interface GraphObject {
  readonly id: string

  // Returns all attribute values associated with this node/edge as Row
  getAttributes: () => Row
}
