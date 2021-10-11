import React, {useState} from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavBarContainer, NavbarWrapper } from './Navbar.elements'
import Logo from "../../assets/images/Logo";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick (!click);
    }
    return ( 
        <>
            <NavBarContainer>
               <NavbarWrapper>
                    <IconLogo className="icon">
                        <Logo width={50} height={40}/>
                    </IconLogo>
                    <IconLogoMobile onClick = { () => ChangeClick()}>
                        {
                            click ? <FaTimes className={click ? "amarillo" : "violeta"}/> : <FaBars/>
                        }
                    </IconLogoMobile>
                    <MenuItem className="sign-in">
                            <MenuItemLink className="sign-in-link" >
                                SIGN-IN
                            </MenuItemLink>  
                    </MenuItem>
                    <Menu click = {click}>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                MEMBRESIAS
                            </MenuItemLink>  
                        </MenuItem>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                RESERVAS
                            </MenuItemLink>  
                        </MenuItem>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                CONTACTO
                            </MenuItemLink>  
                        </MenuItem>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                PREGUNTAS FRECUENTES
                            </MenuItemLink>  
                        </MenuItem>
                        <MenuItem className="sign-in-mobile" onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                SIGN-IN
                            </MenuItemLink>  
                        </MenuItem>
                    </Menu>
                </NavbarWrapper> 
            </NavBarContainer>
            
        </>
    )
}

export default Navbar
