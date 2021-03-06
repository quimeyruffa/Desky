import React, {useState} from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavBarContainer, NavbarWrapper } from './Navbar.elements'
import Logo from "../../assets/images/Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillBellFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const history = useHistory();
    const ChangeClick = () => {
        setClick (!click);
    }

   
    return ( 
        <>
            <NavBarContainer>
        
               <NavbarWrapper>
                   
                    <IconLogo className="icon" onClick={()=> history.push("/")}>
                        <Logo width={50} height={40} color="#511E78" style={{cursor: "pointer"}}/>
                    </IconLogo>
                    
                    
                    
                    <IconLogoMobile onClick = { () => ChangeClick()}>
                        {
                            click ? <FaTimes className={click ? "amarillo" : "violeta"}/> : <FaBars/>
                        }
                    </IconLogoMobile>
                    <MenuItem className="sign-in">
                            <MenuItemLink href="/login" className="sign-in-link" >
                                INICIAR SESION
                            </MenuItemLink>  
                    </MenuItem>
                    <MenuItem className="sign-in">
                            <MenuItemLink className="sign-in-link" href="/booking">
                            < BsFillBellFill className='button'  />
                            </MenuItemLink>  
                    </MenuItem>
                    <Menu click = {click}>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink>
                                MEMBRESIAS
                            </MenuItemLink>  
                        </MenuItem>
                        <MenuItem onClick = { () => ChangeClick()}>
                            <MenuItemLink href='/booking'>
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
                            <MenuItemLink href="/login">
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
