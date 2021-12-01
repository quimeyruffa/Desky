import React from 'react';
import {Star} from '@mui/icons-material/'
import './Comments.css'

export const Reviews = (props) => {

    return (
        <div>
            <div className='Reviews-container' >
                <div className="tituloComentario">
                <h5>Comentarios</h5>
                </div>
                <div className='RatingContainer'>
                    <p>
                    <span><Star/> 4.2 </span>
                    <span> | </span>
                    <span>113 Google reviews</span>
                    </p>
                </div>
                <hr/>
                <div className='reviewContainer'>
                    <div>
                        <span>Estefania Beraja</span>
                    </div>
                    <div className='reviewDate'>
                        <span>4 meses atras</span>
                    </div>
                    <div className='reviewStars'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
                <div className='reviewDescription'>
                    <span>Me encanta éste lugar lindo y prolijo. Es un placer.</span>
                </div>
                <hr/>
                <div className='reviewContainer'>
                    <div>
                        <span>Matias Begega</span>
                    </div>
                    <div className='reviewDate'>
                        <span>6 meses atras</span>
                    </div>
                    <div className='reviewStars'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
                <div className='reviewDescription'>
                    <span>Lindo lugar de trabajo</span>
                </div>
                <hr/>
                <div className='reviewContainer'>
                    <div>
                        <span>Alejandro Cacciato</span>
                    </div>
                    <div className='reviewDate'>
                        <span>8 meses atras</span>
                    </div>
                    <div className='reviewStars'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
                <div className='reviewDescription'>
                    <span>Para recomendar</span>
                </div>
                <hr/>
                
            </div>
        </div>
    )
}
