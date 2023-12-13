import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Card } from './components/Card'

function App() {
  return (
    <section style={{display:"flex", justifyContent:"center"}}>
      <Card img={viteLogo} 
      style={{maxWidth: '240px'}}
        title="vite"
        content="Plantilla que simplifica la creacion de un proyecto con ReactJS">
          <button>like</button>
          <button>dislike</button>
          <button>love</button>
      </Card>
      <Card img={reactLogo} 
        style={{maxWidth: '240px'}}
        title="react"
        content="Framework de JS para desarrollo de interfaces de usuario">
          <button>like</button>
          <button>dislike</button>
          <button>love</button>
      </Card>
    </section>
  )
}

export default App
