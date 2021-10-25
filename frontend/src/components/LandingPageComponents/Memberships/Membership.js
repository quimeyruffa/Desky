import styled from 'styled-components';
import Logo from '../../../assets/images/CardPremium.png';
import Fondo from '../../../assets/images/FondoCard.png';
import { ReactComponent as LogoDesky } from '../../../assets/SVG/LogoDesky.svg'
const Membership = () => {
    return (
        <ContainerCards>
            <Container>
                <Header style={{background:'#511E78'}}>
                    <LogoDesky style={{ width: '160px', height: '197px' }} />
                    <span>DESKY DAILY</span>
                </Header>
                <Body>
                    <label>
                    Desky Daily acceso a los mejores espacios de la industria. Sin compromisos y por un precio economico
                    </label>
                </Body>
                <Footer>
                    <button>Mas</button>
                </Footer>
            </Container>

            <Container>
                <Header>
                    <LogoDesky style={{ width: '160px', height: '197px' }} />
                    <span>DESKY PREMIUM</span>
                </Header>
                <Body>
                    <label>
                        La membresia premium que se ajusta a los consumidores mas exigentes.
                        Acceso a mas espacios, mas amenities y mejores precios
                    </label>
                </Body>
                <Footer>
                    <button>Mas</button>
                </Footer>
            </Container>

            <Container>
                <Header style={{background:'#000000'}}>
                    <LogoDesky style={{ width: '160px', height: '197px' }} />
                    <span>DESKY BUSINESS</span>
                </Header>
                <Body>
                    <label>
                        La membresia Business, pensada para los titanes de la industria que 
                        requieren los mejores espacios para todos sus colaboradores, los mejores 
                        amenities y los mejores precios 
                    </label>
                </Body>
                <Footer>
                    <button>Mas</button>
                </Footer>
            </Container>
        </ContainerCards>
    )
}

export default Membership

const ContainerCards = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
 `
const Container = styled.div`
    width:579px;
    height:877px;
    display:flex;
    flex-direction:column;
    background-image: url(${Fondo});
    background-size:cover;                    
    background-repeat:no-repeat;
    background-position:center center;
    
`
const Header = styled.div`
    width:100%;
    border-radius: 20px 20px 0 0;
    background-image: url(${Logo});
    height:433px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-size:cover;                    
    background-repeat:no-repeat;
    background-position:center center;
    span{
        font-size:50px;
        font-weight:bold;
        font-family: 'ITC Benguiat Gothic Std';
        color:white;
    }
    .cls-3{
        fill: #fff;
        fill-opacity: 100;
    }
`

const Body = styled.div`
    width: 100%;
    height: 220px;
    label{
        font-family: "Roboto";
        font-size:32px;
        text-align:center;
        padding:1em;
        font-weight:regular;
    }
`
const Footer = styled.div`
    height:200px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    button{
        border-radius: 60px;
        height: 80px;
        width: 268px;
        background-color: rgb(114,44,225);
        border:none;
        color:white;
        font-size:45px;
        font-weight:bold;
    }
`