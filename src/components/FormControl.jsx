export const FormControl = ({children, ...props}) =>{
    switch(props.type){
    case "textarea": 
        return <textarea className="form-control"{...props}></textarea>
    case "select": 
        return <select type="select" className="form-control"{...props}>{children}</select>
    default: 
        return <input className="form-control"{...props}/>
} }

export const Button = ({color="dark", text}) => 
    <button className={"btn btn-"+color}>{text}</button>