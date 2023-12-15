import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Card } from './components/Card'
import { Button } from './components/Button'

function App() {
  const buttons = ['like', 'dislike', 'love'];
  const images = [
    {
      title: "vite",
      img: viteLogo,
      content: "Plantilla que simplifica la creacion de un proyecto con ReactJS"
    },
    {
      title: "react",
      img: reactLogo,
      content: "Framework de JS para desarrollo de interfaces de usuario"
    }
  ]
  return (
    <section style={{display:"flex", justifyContent:"center"}}>
      <Card img={viteLogo} style={{maxWidth: '240px'}}
        title="vite"
        content="Plantilla que simplifica la creacion de un proyecto con ReactJS">
          <Button text="like"/>
          <Button text="dislike"/>
          <Button text="love"/>
      </Card>
      <Card img={reactLogo} style={{maxWidth: '240px'}}
        title="react"
        content="Framework de JS para desarrollo de interfaces de usuario">
          <Button text="like"/>
          <Button text="dislike"/>
          <Button text="love"/>
      </Card>
    </section>
  )
}

export default App
