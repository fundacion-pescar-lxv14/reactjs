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
  colStyle = {display: "grid", gap: ".5rem", flex: "1 0 min(100%, 320px)", textAlign: "left" },
  buttons = ['like','dislike','love','angry'],
  images = [
    {
      title: "vite",
      img: viteLogo,
      content: "Plantilla que simplifica la creacion de un proyecto con ReactJS, VueJS, LitElement o VanillaJS con Typescript o Javascript"
    },
    {
      title: "react",
      img: reactLogo,
      content: "Framework de JS creado por facebook para desarrollo de interfaces de usuario sencillas, escalables y de rapida ejecucion"
    },
    {
      title: "ES6",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
      content: "Estandar de JS que define la sintaxis del lenguaje, incluyendo nuevas funcionalidades como clases, promesas, arrow functions, etc."
    },
    {
      title: "JSX",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_xml_icon_130060.png",
      content: "Extension de JS que permite escribir con una sintaxis similar HTML en JS debido a la implementacion de XML"
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