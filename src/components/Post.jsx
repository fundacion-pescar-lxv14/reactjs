
import { useState, useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Post = ({ title, username, images:{ original, fixed_height_downsampled, fixed_width_small }}) => {
    const [[select, setSelect],{theme,color,choose}] = [useState(0), useContext(ThemeContext)]
    return(
    <article className={"col-md p-3 rounded bg-"+theme}>
        <div onClick={() => setSelect(!select)}>{
        select ?
        <video className={"w-100 bg-"+theme} autoPlay muted loop>
            <source src={original.mp4}/>
            <source src={fixed_height_downsampled.mp4}/>
            <source src={fixed_width_small.mp4}/>
        </video>
        : <img className="w-100" src={fixed_height_downsampled.url}/>
        }    
        </div>
        <h3 className="h5">{title}</h3>
        <p>{username}</p>
        <div>
            {color.map((c,i) => <button className={"btn btn-"+theme} key={i} onClick={()=>choose(i)}>{c}</button>)}
        </div>
    </article>
)}