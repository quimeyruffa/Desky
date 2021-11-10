import styled from 'styled-components';
import Logo from '../../../assets/images/CardPremium.png';
import Fondo from '../../../assets/images/FondoCard.png';
import { ReactComponent as LogoDesky } from '../../../assets/SVG/LogoDesky.svg'
const Membership = () => {
    return (
        <ContainerCards>
            <Container>
                <Header style={{background:'#511E78'}}>
                    <LogoDesky style={{ width: '120px', height: '120px' }} />
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
                    <LogoDesky style={{ width: '120px', height: '120px' }} />
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
                    <LogoDesky style={{ width: '120px', height: '120px' }} />
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
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:10px;
    @media (min-width: 50em){
        flex-direction:row;
    }

const Container = styled.div`
    width:80%;
    border-radius:25px;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    background-image: url(${Fondo});
    background-size:cover;                    
    background-repeat:no-repeat;
    background-position:center center;
    margin-bottom:40px;
    @media (min-width: 50em){
        width:25%;
    }
    
    
`
const Header = styled.div`
    width:100%;
    border-radius: 20px 20px 0 0;
    background-image: url(${Logo});
    padding:30px;
    height:200px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-size:cover;                    
    background-repeat:no-repeat;
    background-position:center center;
    span{
        font-size:32px;
        margin-top:20px;
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
    
    label{
        font-family: "Roboto";
        font-size:20px;
        text-align:left;
        padding:1em;
        font-weight:400;
    }
`
const Footer = styled.div`
    padding:20px;
    display:flex;
    flex-direction:colum;
    justify-content:center;
    align-items:flex-end;
    margin-top:20px;
    
    button{
        border-radius: 60px;
        height: 80px;
        width: 268px;
        background-color: rgb(114,44,225);
        border:none;
        color:white;
        font-size:24px;
        font-weight:bold;
    }
`