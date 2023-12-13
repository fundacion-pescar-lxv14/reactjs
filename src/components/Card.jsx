export const Card = ({img, title, content, children, ...props}) => 
<div className="card"{...props}>
    <header className="card-header">
        <img className={"logo "+ title} src={img} alt={title}/>
    </header>
    <div className="card-body">
        {content}
    </div>
    <footer className="card-footer">
        {children}
    </footer>
</div>