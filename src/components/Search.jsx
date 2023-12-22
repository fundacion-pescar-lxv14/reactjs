import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext"

export const Search = ({text, ...props}) => 
    <form className='input-group p-3' onSubmit={e => e.preventDefault() }>
        <FormControl {...props}/>
        <Button/>
    </form>

const Button = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <button className={"btn btn-"+theme}>Buscar</button>
)}
const FormControl = (props) =>
    <input className={"form-control"} {...props}/>