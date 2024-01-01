import { HeaderContainer} from "./styles"
import logo from "../../assets/Logo (3).svg"
import { Timer , Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header(){
    return(
        <HeaderContainer>
            <span><img src={logo} alt="" /></span>
            <nav>
                <NavLink to="/">
                    <Timer size={32}/>
                </NavLink>
                <NavLink to="/historico">
                    <Scroll size={32}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}