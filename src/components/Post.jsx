
import { useState } from "react"
import { Image, Video } from "./Media"

export const Post = ({title, username, images}) => {
    const [select, setSelect] = useState(0)
    return(
    <article className={(select?"position-fixed top-0 start-0 w-100 h-100":"col-md rounded")+" p-3 text-light bg-dark"} onClick={()=>setSelect(!select)}>
        {select?<Video className="h-100"{...images}/>:<Image className="w-100"{...images}/>}
        <div className={select && "position-absolute d-flex start-50 bottom-0 translate-middle-x justify-content-between col-8 bg-gradient p-3"}>
            <h3 className="h5">{title}</h3>
            <p>{username}</p>
        </div>
    </article>
)}