import styles from "./navbar.module.css";
import {logout} from "../../Server/Auth";
import {useHistory} from "react-router";
import LogoutButton from '../ButtonComponent/LogoutButton'
import {NavLink} from "react-router-dom";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button
} from 'reactstrap';
import {useState} from "react";

const Header = () => {
    const history = useHistory();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }


    return (<div>
        <header className={styles.header}>
            <Navbar dark expand="sm">
                <div className="container">
                    <NavbarToggler onClick={toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/"><img src='#' height="30" width="41"
                                                                   alt='App Brand'/></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem >   <NavLink className="nav-link" to='/'> <span
                                className="fa fa-home fa-lg"> Home</span></NavLink>
                            </NavItem>
                            <NavItem >   <NavLink className="nav-link" to='/chat'> <span
                                className="fa fa-info fa-lg "> Chat </span></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to='/'> <span
                                    className="fa fa-address-card fa-lg"> My profile</span></NavLink>
                            </NavItem>
                            <NavItem >   <NavLink className="nav-link" to='/contactus'> <span
                                className="fa fa-calendar fa-lg"> Contact us </span></NavLink>
                            </NavItem>

                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={{padding: 5}}>
                                <NavLink className="nav-link" to='/'> <span
                                    className="fa fa-address-card fa-lg"></span> My profile</NavLink>
                            </NavItem>

                            <NavItem>
                                <LogoutButton
                                    onClick={() => {
                                        logout();
                                        history.push('/login')
                                    }}
                                ><span className="fa fa-sign-out fa-lg mr-1"></span> Sign out</LogoutButton>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        </header>

    </div>);
}

export default Header;