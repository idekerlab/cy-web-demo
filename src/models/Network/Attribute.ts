import { ValueType } from '../Table/ValueType'

export interface Attribute<T extends ValueType> {
  key: BigInt
  label?: string // Optional human-readable name
  value: T
}
