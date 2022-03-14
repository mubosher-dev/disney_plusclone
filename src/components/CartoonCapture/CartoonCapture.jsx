import styled from "styled-components";
import { dataLayer } from "../../app/reducer";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';

const CartoonCapture = (props) => {

    const data = dataLayer.data;

    return(
        <Container style={{background:`linear-gradient(0,rgba(0,0,0,0.3),rgba(0,0,0,0.8)),url(${data?.backgroundImg})`}}>
            <Avatar src={data?.titleImg} />

            <Wrapper>
                <Button className="white"> <PlayArrowIcon />Play </Button>
                <Button> <PlayArrowIcon className="black" />Trailer </Button>
                <ButtonCircle> <AddIcon className="add" /> </ButtonCircle>
                <ButtonCircle> <GroupIcon className="group" /> </ButtonCircle>
            </Wrapper>
            <h4> {data?.subTitle}</h4>

            <h3>{data?.description}</h3>
        </Container>
    )
}

const Container = styled.div`
    padding:100px;
    background-size:cover;
    background-repeat:no-repeat;
    color:inherit !important;
    overflow:hidden;
    position:absolute;
    bottom:0;
    top:0;

    h4{
        font-size:16px;
    }

    @media screen and (max-width:768px){
        position:fixed;
        height:100vh;
        padding:30px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
    }
`;

const Wrapper = styled.div`
    display:flex;
    font-size:20px;
    align-items:center;


`;

const Avatar = styled.img`
    width:500px;
    object-fit:contain;

    @media screen and (max-width:768px){
        width:200px !important;
    }
`;

const Button = styled.div`
    display:flex;
    align-items:center;
    width:150px;
    background:rgba(0,0,0,0.5);
    padding:10px 15px;
    margin-right:15px;
    cursor:pointer;


    &:hover{
        opacity:0.7;
    }


    @media screen and (max-width:768px){
        width:100px;
    }
`;

const ButtonCircle = styled.button`
    border:none;
    outline:none;
    padding:10px;
    color:black!important;
    border-radius:50%;
    margin:0 15px;
    cursor:pointer;
    background:#000;
    color:#fff !important;

    @media screen and (max-width:768px){
        display:none;
    }

`;

export default CartoonCapture;