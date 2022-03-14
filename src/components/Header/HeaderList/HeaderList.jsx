import React from 'react'
import styled from 'styled-components'


function HeaderList({Icon, NavTitle}) {
  return (
    <NavList>
        {Icon}
        <h4>{NavTitle}</h4>
    </NavList>
  )
}


const NavList = styled.div`
    display:flex;
    position:relative;
    cursor:pointer;
    align-items:center;
    margin:0 5px;

    h4{
        margin:0 10px;
    }

    &::after{
        content:"";
        position:absolute;
        width:0;
        height:2px;
        background:#fff;
        right:0;
        bottom:-20%;
        border-radius:1px;
        transition:0.4s ease-in;
    }

    &:hover::after{
        width:100%;
    }
`;

export default HeaderList