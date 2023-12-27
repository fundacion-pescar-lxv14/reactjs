export const Search = ({text, ...props}) => 
    <form className='input-group p-3' onSubmit={e => e.preventDefault() }>
        <FormControl {...props}/>
        <Button/>
    </form>

const Button = ({color="dark"}) => {
    return(
        <button className={"btn btn-"+{color}}>Buscar</button>
)}
const FormControl = (props) =>
    <input className={"form-control"} {...props}/>