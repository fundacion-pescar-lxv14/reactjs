export const Search = ({callback}) => 
    <form className="input-group p-3" onSubmit={e => e.preventDefault() }>
        <input className="form-control" 
            name="search"
            type="search"
            placeholder="Buscar..."
            onInput={callback} />
        <button className="btn btn-primary">Buscar</button>
    </form>