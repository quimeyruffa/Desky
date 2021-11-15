import Logo from "../../../assets/images/Logo";
import React from "react";
import './SearchHeader.css';

export const SearchHeader = () => {

    return (
    <div className='header-title'>
        <div className="title-wrapper">
            <h1 className="titulo-search">DESKY</h1>
            <Logo width={100} height={100} color={"#ffffff"} className="logo-search"/>
        </div>
    </div>
    )
}
