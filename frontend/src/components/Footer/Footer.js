import React from 'react'

export const Footer = () => {
    return (
        <div>
             <section class="container">
        <div className="split">
            <div className="product-link">
                <div className="product-circle"></div>
                <h3>Oficinas</h3>
            </div>
            <div className="product-link">
                <div className="product-circle"></div>
                <h3 style={{textAlign: 'center'}}>Sala de Reuniones</h3>
            </div>
            <div className="product-link">
                <div className="product-circle"></div>
                <h3>Eventos</h3>
            </div>
        </div>
    </section>
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
             <div className="footer-img">
                 <i className="fab fa-facebook-f"></i>
                 <i className="fab fa-instagram"></i>
             </div>
             <div  className="footer-img">
                 <i className="fab fa-twitter"></i>
                 <i className="fab fa-linkedin-in"></i>
             </div>
             <a></a>
             <a >Lima 775, C1073 CABA</a>
         </div>
     </footer>
        </div>
    )
}
