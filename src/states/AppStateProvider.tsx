import { Context, createContext, FC, ReactNode, useReducer } from 'react'
import { ApplicationState } from './ApplicationState'

const initialState: ApplicationState = {
  network: null,
  networkAttributes: null,
  nodeTable: null,
  edgeTable: null,
  networkView: null,
  visualStyle: null,
}

export const AppContext: Context<ApplicationState> = createContext(initialState)

interface ContainerProps {
  children?: ReactNode
}

export const AppStateProvider: FC<ContainerProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: ApplicationState, action: any) => {
      switch (action.type) {
        case 'dummyAction':
          const newState = { ...state }
          return newState
        default:
          throw new Error()
      }
    },
    initialState,
  )

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}
