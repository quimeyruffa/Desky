import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
export default function Cards({
    coworking_name, coworking_direccion,
    coworking_price, coworking_date,
    coworking_amenities,
    coworking_img,
    state
}) {

    return (
        <Card>
            <Img img={coworking_img} />
            <ContainerData>
                <Div>
                    <div>
                        <P>{coworking_name}</P>
                    </div>

                    <div>{coworking_direccion}</div>

                </Div>

                <Div>
                    <div style={{ justifyContent: 'space-between' }}>
                        <Button width={"32%"} padding={1} text={'Ver'} color={'white'} background={'#4B03BA'} acction={''} />
                        <Button width={"32%"} padding={1} text={'Pagar'} color={'white'} background={'#4B03BA'} acction={''} />
                        <Button width={"32%"} padding={1} text={'Cancelar'} color={'white'} background={'#4B03BA'} acction={''} />

                    </div>

                    <div>
                        {coworking_date}
                    </div>

                    <div>
                        {!state ?
                        <Button width={"100%"} padding={1} text={'Pendiente Confirmacion'} color={'white'} background={'#E0610E'} acction={''} /> :
                        <Button width={"100%"} padding={1} text={'Confirmado'} color={'white'} background={'#8DB600'} acction={''} />
                        }

                    </div>
                </Div>
            </ContainerData>
        </Card>
    )
}

const Card = styled.div`
    margin-bottom:0.7em;
    display:flex;
    flex-direction:row;
    width:90%;    
    border: 1px solid #B9B7B7;
    border-radius:20px;
    background-color: #FFFFFF;
    
`
const Img = styled.div`
    background-image:url(${props => props.img});
    width:388px;
    border-radius:20px 0px 0px 20px;
    background-size:cover;                    
    background-repeat:no-repeat;
    background-position:center center;
`
const ContainerData = styled.div`
    padding:1em;
    display:flex;
    flex-direction:row;
    width:1295px;
`
const Div = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
    div{
        height:40px;
        display:flex;
        flex-direction:row;
    }
`
const P = styled.p`
    font-size:35px;
    font-weight:bold;
    font-family:'Alegreya Sans',sans-serif;
    color:black;    
`