import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <Cta>
                    <CLogo src="https://disney-clone-d1e27.web.app/images/cta-logo-one.svg" />
                    <SignUp> Get All Free </SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CLogoTwo src="https://disney-clone-d1e27.web.app/images/cta-logo-two.png" />
                </Cta>
                <BgImg />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    display:flex;
    overflow:hidden;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;

const Content = styled.div`
    margin-bottom:10vh;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    height:100vh;
    padding:20px 40px;
`;


const BgImg = styled.div`
    right:0;
    left:0;
    height:100vh;
    top:0;
    z-index:-99899990;
    backgroun-position:center;
    position:absolute;
    background-size:cover;
    background-image:url("https://disney-clone-d1e27.web.app/images/login-background.jpg");
`;


const Cta = styled.div`
    position:relative;
    z-index:100000;
    width:600px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media screen and (max-width:500px){
        width:90%!important;
    }
`;

const CLogo = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    width:100%;

    @media screen and (max-width:768px){
        width:400px;
    }
    @media screen and (max-width:450px){
        width:300px;
    }
`;

const SignUp = styled.a`
    font-seight:bold;
    display:block;
    width:100%;
    color:#f9f9f9;
    background-color:#0063e5;
    letter-spacong:1.5px;
    margin-bottom:12px;
    font-size:18px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;

    &:hover{
        background-color:#0483ee;
    }
`;

const Description = styled.p`
    font-size:14px;
    color:lightgray;
`;

const CLogoTwo  = styled.img`
    max-width:600px;
    object-fit:contain;
    // width:300px;

    @media screen and (max-width:768px){
        width:450px;
        object-fit:cover;
    }

    @media screen and (max-width:450px){
        width:300px;
    }
`;

export default Login