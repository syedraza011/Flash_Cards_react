import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink activeclassname="active" to={"/"}>Cards</NavLink>
            <NavLink activeclassname="active" to={"/admin"}>Admin</NavLink>
        </nav>
    )
}

export default Nav;