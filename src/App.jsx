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
      { images.map((data, i) => <Card {...data} style={{maxWidth: "320px"}} children={ buttons.map((btn,i) => <Button text={btn}/>)} /> )}
    </section>
  )
}

export default App
