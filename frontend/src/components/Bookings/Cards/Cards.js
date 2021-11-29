import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {getEvento} from "../../Calendar/GetEvents";

export default function Cards({
                                  coworking_name, coworking_direccion,
                                  coworking_price, coworking_date,
                                  coworking_amenities,
                                  coworking_img,
                                  state,
                                  id_objeto,
                                  fecha_Ini,
                                  eventos
                              }) {
    const [hecho, setHecho] = useState(false);

    const newPayment = async () => {
        try{
            const data = await fetch('http://localhost:8080/pagar', {method: 'POST', body: JSON.stringify({message: 'hola'})})
            const dataCowork = await data.json();
            window.open(dataCowork.urlPayment, '_blank')
            console.log(dataCowork)
        }catch(err){
            console.log(err)
        }

    }
    useEffect(async () => {
        await eventos.forEach((event) => {
            if (event.start.dateTime === `${fecha_Ini}T00:00:00-03:00`) {
                if (event.attendees[1].email !== localStorage.getItem("email")) {
                    if (event.attendees[1].responseStatus !== "needsAction") {
                        fetch(`http://localhost:8080/reservaConfirmada?id=${id_objeto}`, {method: 'POST'}).then(() => {
                            console.log("actualizado! 1");
                            setHecho(true);
                        });
                    }
                } else {
                    if (event.attendees[0].responseStatus !== "needsAction") {
                        fetch(`http://localhost:8080/reservaConfirmada?id=${id_objeto}`, {method: 'POST'}).then(() => {
                            console.log("actualizado! 0");
                            setHecho(true);
                        });
                    }
                }
            }
        })
    }, [])

    return (

        <Card>
            <Img img={coworking_img}/>
            <ContainerData>
                <Div>
                    <div>
                        <P>{coworking_name}</P>
                    </div>

                    <div>{coworking_direccion}</div>

                </Div>

                <Div>
                    <div style={{ justifyContent: 'space-between' }}>

                        {/*<Button width={"32%"} padding={1} text={'Ver'} color={'white'} background={'#4B03BA'} acction={''} />*/}
                        {/*<Button width={"32%"} padding={1} text={'Cancelar'} color={'white'} background={'#4B03BA'} acction={''} />*/}


                    </div>

                    <div>
                        {coworking_date}
                    </div>

                    <div>
                        {!state && !hecho ?
                            <Button width={"100%"} padding={1} text={'Pendiente Confirmacion'} color={'white'}
                                    background={'#E0610E'} acction={''}/> :
                            <Button width={"100%"} padding={1} text={'Confirmado'} color={'white'}
                                    background={'#8DB600'} acction={''}/>
                        }
                        <Button width={"30%"} padding={1} text={'Pagar'} color={'white'} background={'#4B03BA'} acction={() => newPayment()} pago={true} />


                    </div>
                </Div>
            </ContainerData>
        </Card>
    )
}

const Card = styled.div`
  margin-bottom: 0.7em;
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 1px solid #B9B7B7;
  border-radius: 20px;
  background-color: #FFFFFF;

`
const Img = styled.div`
  background-image: url(${props => props.img});
  width: 388px;
  border-radius: 20px 0px 0px 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const ContainerData = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  width: 1295px;
`
const Div = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  div {
    height: 40px;
    display: flex;
    flex-direction: row;
  }
`
const P = styled.p`
  font-size: 35px;
  font-weight: bold;
  font-family: 'Alegreya Sans', sans-serif;
  color: black;
`