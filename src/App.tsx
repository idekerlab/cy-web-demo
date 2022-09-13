import reactLogo from './assets/react.svg'
import './App.css'

import { AppStateProvider } from './states/AppStateProvider'
import { NetworkRenderer } from './components/NetworkRenderer'

const App = () => (
    <AppStateProvider>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Cytoscape Web Design Concept</h1>
        <div className="card">
          <NetworkRenderer networkView={null} />
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </AppStateProvider>
  )

export default App
