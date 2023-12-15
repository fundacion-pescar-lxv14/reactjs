import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Card } from './components/Card'
import { Button } from './components/Button'

function App() {
  const rowStyle = {
    display:"flex", 
    flexWrap: "wrap",
    justifyContent:"center"
  },
  colStyle = { flex: "1 0 min(100%, 320px)" },
  buttons = ['like', 'dislike', 'love'],
  images = [
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
    <section style={rowStyle}>{ 
      images.map((data,i) => 
      <Card key={i} {...data} style={colStyle}> 
        { buttons.map((btn,i) => <Button key={i} text={btn}/>)} 
      </Card> )}
    </section>
  )
}
export default App