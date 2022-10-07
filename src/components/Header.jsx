import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <nav>
                <Link to="/clock">Horloge</Link> |{" "}
                <Link to="/list">Liste</Link> |{" "}
                <Link to="/people">People</Link>
            </nav>
        </div>
    )
}