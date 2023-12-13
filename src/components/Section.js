export const Section = ({title, content, ...props}) =>
<section {...props}>
    <header className="card-header placeholder-glow">
        <h2 className={title ? 'card-title fs-4' : 'placeholder placeholder-lg col-10'}>{title}</h2>
    </header>
    { content ? 
        <p className="card-body">{content}</p> : 
        <div className="placeholder-glow d-flex flex-wrap gap-2">
            <span className="placeholder col-5"></span>
            <span className="placeholder col"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col"></span>
            <span className="placeholder col-5"></span>    
            <span className="placeholder col-4"></span>
            <span className="placeholder col"></span>
            <span className="placeholder col"></span>
        </div>}
    <footer className="card-footer text-end">
        <a href="#" className="btn btn-primary py-2 px-4">{content ? "Ver más" : ''}</a>
    </footer>
</section>