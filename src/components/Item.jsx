export default function Item({title, status, description}){
    return (
        <div className="card">
            <h2>{title}</h2>
            <span className={`pellet ${status ? "pellet--green" : "pellet--red"}`}></span>
            <p className="description">{description}</p>
        </div>
    )
}