import React, { useEffect, useState } from 'react';
import HeaderList from './HeaderList/HeaderList';
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AnimationSharpIcon from '@mui/icons-material/AnimationSharp';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../app/reducer';
import { useStateValue } from '../../feuteres/StateProvider';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Header() {
  const [user, setUser] = useState('')

  const navigateTo = useNavigate()

  const [state, dispatch] = useStateValue('');

  const [load, setReload] = useState(false);

  const handleAuth = () => {
    auth.signInWithPopup(provider).then(result => {
      console.log("auth result>>>", result);
      setUserLogin(result.user);
      navigateTo("/home")
    }).catch(err => {
      console.log("auth err>>>", err);
    })
  }

  console.log("homestate>>",state);

  const setUserLogin = (user) => {
    console.log("setLoginUser>>>>>>", user);

    dispatch({
      type: actionTypes.SET_LOGIN_USER,
      user: user.displayName,
      email: user.email,
      photo: user.photoURL,
    })

    setUser(user)
  }

  const backHome = () => {
    navigateTo("/");

    dispatch({
      type: actionTypes.SIGN_OUT,
      user:null,
      email:null,
      photo:null
    })

    setUser(null)
    navigateTo("/")
  }

  useEffect(() => {
    if(!user){
      navigateTo("/")
    }
  },[])

  return (
    <Headers>
     <Link to={"/home"}>
        <Logo src="https://disney-clone-d1e27.web.app/images/logo.svg" />
     </Link>
      {user && (
        <NavMenu>
          <HeaderList Icon={<HomeIcon />} NavTitle={"Home"} />
          <HeaderList Icon={<SearchIcon />} NavTitle={"Search"} />
          <HeaderList Icon={<AddIcon />} NavTitle={"WatchList"} />
          <HeaderList Icon={<StarIcon />} NavTitle={"Originals"} />
          <HeaderList Icon={<SlideshowIcon />} NavTitle={"Movies"} />
          <HeaderList Icon={<AnimationSharpIcon />} NavTitle={"Series"} />
        </NavMenu>
      )}
      {user ? (
       <DropItems>
         <Avatar src={user.photoURL} />
         <ButtonSignOut
         onClick={backHome}
         > Sign Out </ButtonSignOut>
       </DropItems>
      ): (
        <>
        <LoginButton
        onClick = { handleAuth }
            >
        Login
      </LoginButton>
        </>
      )
}
    </Headers >
  )
}

const Headers = styled.header`
  top:0;  
  left:0;
  right:0;
  position:fixed;
  z-index:100000;
  padding:20px;
  background:#000016;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Logo = styled.img`
  width:90px ;
  object-fit:contain;
`;

const LoginButton = styled.a`
  border:1px solid white;
  padding:8px;
  cursor:pointer;
  font-size:18px;
  width:80px;
  text-align:center;
  background-color:#000;
  border-radius:10px;

  &:hover{
    color:#000;
    background-color:#fff;
  }
`;


const NavMenu = styled.div`
  display:flex;
  align-items:center;
  transform:translateX(-30%);

  @media screen and (max-width:1200px){
    transform:translateX(0%) !important;
  }

  @media screen and (max-width:808px){
    width:500px;
    overflow-x:scroll;
    ::-webkit-scrollbar{
      display:none;
    }
  }
`;

const Avatar = styled.img`
  width:50px;
  border-radius:100%;
  cursor:pointer;
`;

const DropItems = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  width:150px;

  &:hover button{
    display:block;
  }
`;

const ButtonSignOut = styled.button`
  position:absolute;
  width:100px;
  bottom:-50%;
  left:-10%;
  background:lightgray;
  color:#fff !important;
  padding:10px;
  font-size:16px;
  text-align:center;
  border-radius:10px;
  border:1px solid #fff;
  cursor:pointer;
  display:none;
  transition:all .3s ease-in !important;

  &:hover{
    background:#ff0000;
    color:black;
  }


  @media screen and (max-width:500px){
    left:-60% !important;
  }

  @media screen and (max-width:400px){
    left:-100% !important;
  }
`;

export default Header;