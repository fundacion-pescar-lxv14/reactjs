import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"
import { Post } from "./Post"

export const Results = () => {
    const {results, search:{text}} = useContext(SearchContext)
    return(
    <main className="container row p-3 gap-2">
        <h2>{ results ? "Resultados de "+text : "No existen resultados" }</h2>{
        results?.data?.map((props,i) => 
            <>
            <Post key={"article-"+i} {...props} />
            {(i+1)%3 === 0 && <div key={"divider-"+i} className="col-12"></div> }
            </> 
        )}
    </main>)}