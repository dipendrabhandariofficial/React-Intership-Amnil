import React from 'react'
import Tabs from './components/Tabs'
import Tab from './components/Tab'
import './App.css'
import Labs from './components/Labs'

function App() {

  return (
    <div>
      <Labs />
      <Tabs>
        <Tab label="Tab 1">
            <h2>Content 1</h2>
            <hr />
            <p>Content for tab one.</p>
        </Tab>
        <Tab label="Tab 2">
            <h2>Content 2</h2>
            <hr />
            <p>Content for tab two.</p>
        </Tab>
        <Tab label="Tab 3">
            <h2>Content 3</h2>
            <hr />
            <p>Content for tab three.</p>
          
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
