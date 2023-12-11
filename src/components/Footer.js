function Footer (props){
    const {copy, author, mail} = props;
    return(
        <footer className="App">
            <p>&copy;{copy} Todos los derechos reservados | Desarrollado por <a href={"mailto:"+mail} className="App-link">{author}</a> &amp; Compañia</p>
        </footer>
    )
}
export default Footer;