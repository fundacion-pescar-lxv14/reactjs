export const Social = ({links}) =>
    <section className="text-center p-3">
        <h2>Redes Sociales</h2>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
        { links.map(l => <Icon type="fab fs-1 "{...l}/>) }
        </ul>
    </section>

const Icon = ({link, icon, title, text, type, color}) =>
    <a className={"btn btn-outline-"+color+" "+type+" fa-"+icon} href={link} target="_blank" title={title}>
        { text ?? '' }
    </a>