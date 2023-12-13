export default function Navigation({brand, links}){
    return (
    <nav className="navbar navbar-dark bg-dark bg-gradient navbar-expand-md | sticky-top p-2">
        <a className="navbar-brand" href="#">{brand ?? "Fundacion Pescar"}</a>
        <button className="navbar-toggler navbar-toggler-icon" data-bs-target=".navbar-nav" data-bs-toggle="collapse"></button>
        <ul className="navbar-nav navbar-collapse collapse">
            { links.map(l => <Link to={l}/>) }
        </ul>
    </nav>
)}

const Link = ({to}) => 
    <li>
        <a className="nav-link" href={"#"+to}>{to}</a>
    </li>