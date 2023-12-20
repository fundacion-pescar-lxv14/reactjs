import { Post } from "./Post"

export const Results = ({results}) => 
    <main className="container p-3">
        <h2>{ results ? "Resultados" : "No existen resultados" }</h2>{
        results?.map((props,i) => 
            <Post key={i} {...props} /> 
        )}
    </main>