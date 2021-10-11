import styled from "styled-components";

export const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    top:0;
    z-index: 99;
`;

export const NavbarWrapper = styled.div`
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #ffff !important;

    .sign-in {
        border: 0;
        margin: 0 15px;
    }

    .icon {
        flex-grow: 2;
    }

    @media screen and (max-width: 768px) {
        .sign-in {
            display: none;
        }
    }

`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: #ebc08b !important;
    padding-left: 1rem;
`;

export const Menu = styled.ul`
    height: 100%;
    margin: 0;
    width: 200px;
    position: absolute;
    top:60px;
    right: ${({click}) => click ? 0 : "-100%"};
    transition: 400ms all ease-in-out;

    .sign-in-mobile {
        display: none;
    }

    @media screen and (max-width: 768px){

        .sign-in {
            display: none;
        }

        .sign-in-mobile {
            display: flex;
            order: -1;
        }

        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        background-color: #49426c; 
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex;

    }
`;


export const MenuItem = styled.li`
    border: 1px solid rgba(163, 183, 183, 0.5);
    height: 100%;
    padding: 0.5rem 2.0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    color: #511e78 !important;
    text-align: center;
    background-color: #fff !important;
    margin:0;
    &:hover {
        background-color: rgba(163, 183, 183, 0.12);
        transition: 300ms all linear;
        color: #ebc08b !important;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        background-color: #49426c;
        color: #ebc08b !important;
        border: 0;

        &:hover a{
            border-bottom: 0.1rem solid #ebc08b !important;
            transition: 0.3s ease-in;
        }
    }

`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: #511e78 !important;
`;

export const IconLogoMobile = styled.div`

    display: flex;
    order: 1;
    color: #511e78;
    font-size: 2rem;
    padding-right: 1rem;
    position: right;
    z-index: 150;
    transition: transform .4s 0s ease-in-out;
    

    @media screen and (max-width: 768px ) {

        .amarillo {
            color: #ebc08b !important;
        }

        .violeta {
            color: #511e78 !important;
        }
        
    }
`;