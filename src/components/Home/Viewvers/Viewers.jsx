import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-disney.png?raw=true" alt="viewers__png" />
                <video src="./videos/disney.mp4"
                autoPlay
                loop
                playsInline
                muted
                ></video>
            </Wrap>
            <Wrap>
                <img src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-marvel.png?raw=true" alt="viewers__png" />
                <video src="./videos/marvel.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                ></video>
            </Wrap>
            <Wrap>
                <img src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-national.png?raw=true" alt="viewers__png" />
                <video src="./videos/geopragic.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                ></video>
            </Wrap>
            <Wrap>
                <img src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-pixar.png?raw=true" alt="viewers__png" />
                <video src="./videos/pixar.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                ></video>
            </Wrap>
            <Wrap>
                <img src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-starwars.png?raw=true" alt="viewers__png" />
                <video src="./videos/star.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                ></video>
            </Wrap>
          
        </Container>
    )
}

const Container = styled.div`
    margin-top:30px;
    padding:30px 0px 30px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));


    @media screen and (max-width:768px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`;

const Wrap = styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
               rgb(0 0 0 / 73%) 0px 16px 16px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    border:3px solid rgba(249,249,249,0.1);

    img{
        inset:0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
    }

    video{
        inset:0px;
        object-fit:cover;
        position:absolute;
        width:100%;
        height:100%;
        z-index:-1;
    }

    &:hover{
        transform:scale(1.03);
        border:1px solid #fff;
        video{
            display:block;
        }
    }
`;

export default Viewers;