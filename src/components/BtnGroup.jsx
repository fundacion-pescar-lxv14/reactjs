import { PageButtons } from "./PageButtons"
import { Button } from "./FormControl"

export const BtnGroup = () =>{
    return(
    PageButtons().map((btn,i) => <Button key={i}{...btn}/>)
)}

// ANTERIOR: ()=>offset > 0 && setOffset(offset - limit)
// SIGUIENTE: ()=> current < total_pages && setOffset(offset + limit)