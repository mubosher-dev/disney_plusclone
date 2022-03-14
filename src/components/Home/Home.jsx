import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImgSlider from './Imgslider/ImgSlider';
import Viewers from './Viewvers/Viewers'
import Recomends from './Recomends/Recomends';
import Originals from './Originals/Originals'
import NewDisney from './NewDisney/NewDisney'
import Tranding from './Trending/Tranding';


function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recomends />
      <NewDisney/>
      <Originals/>
      <Tranding/>
      
    </Container>
  )
}

const Container = styled.div`
    padding-top:120px;
    padding-right:100px;
    padding-left:100px;
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    overflow-y:scroll;
    display:block;
    background-repeat: no-repeat;
    background-position:center;
    @media screen and (max-width:768px){
      min-height:330vh;
      height:auto !important;
      padding: 0 calc(3.5vw + 5px);
      padding-top:100px;
    }
    &::after{
      content:'';
      position:absolute;
      padding:10px;
      top:0;
      left:0;
      right:0;
      height:100%;
      z-index:-1;
      background-attachment:fixed;
      background-repeat:no-repeat;
      background-image:url("https://prod-static.disney-plus.net/us-east-1/builds/0dbbdb5797cc274df6952863958f9afdbaa6cf27/node_modules/dss-junglebook/components/themes/images/background.png");
    }
`;

export default Home