import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {WavesFooter} from "../../assets/images/WavesFooter";

export const Footer = () => {
    return (
        <div className="div-footer" style={{ background:'#E5E5E5'}}>
                <footer>
                    <div className="footer-column">
                        <a>Quienes Somos</a>
                        <a>Mision y Vision</a>
                        <a>Carrera</a>
                        <a>Inversores</a>
                    </div>
                    <div className="footer-column">
                        <a>Contactos</a>
                        <a>Preguntas frecuentes</a>
                        <a>Privacidad</a>
                        <a>Terminos y condiciones</a>
                    </div>
                    <div className="footer-column">
                        <div className="footer-img" style={{paddingBottom: '80px'}}>
                            <FaFacebookF className='icon'/>
                            <IoLogoInstagram className='icon'/>
                        </div>
                        <div className="footer-img">
                            <AiOutlineTwitter className='icon'/>
                            <FaLinkedinIn className='icon'/>
                        </div>
                        <a></a>
                        <a>Lima 775, C1073 CABA</a>
                    </div>
                </footer>
        </div>
    )
}
