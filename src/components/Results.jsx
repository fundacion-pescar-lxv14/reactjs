import { Post } from "./Post"

export const Results = ({text, results}) => 
    <main className="container row p-3 gap-2">
        <h2>{ results ? "Resultados de "+text : "No existen resultados" }</h2>{
        results?.map((props,i) => 
            <>
            <Post key={"article-"+i} {...props} />
            { (i+1)%3 === 0 && <div key={"divider-"+i} className="col-12"></div> }
            </> 
        )}
    </main>