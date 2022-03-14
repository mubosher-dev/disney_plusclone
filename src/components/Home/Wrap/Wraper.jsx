import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../app/reducer";
import { useStateValue } from "../../../feuteres/StateProvider";

const Wraper = ({url}) => {

    const [state, dispatch] = useStateValue();


    const navigateTo = useNavigate();

    const setClick = () => {
        navigateTo("/cartoon");

        dispatch({
            type:actionTypes.SELECTED,
            data:{
                backgroundImg: url.backgroundImg,
                cardImg: url.cardImg,
                description: url.description,
                subTitle:url.subTitle,
                title: url.title,
                titleImg:url.titleImg,
                type:url.type,
            }
        })
    }

    return( 
        <Wraps onClick={setClick}>
                <img src={url.cardImg} alt="view__img" />
        </Wraps>
    )
}

const Wraps = styled.div`
    padding-top:50%;
    border-radius:10px;
    cursor:pointer;
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow:hidden;
    position:relative;
    border:3px solid rgba(249,249,249,0.1);

    img{
        width:100%;
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        position:absolute;
        transition:opacity 500ms ease-in;
        z-index:0;
        top:0;
    }

    &:hover{
     transform:scale(1.05);
     border-color:#fff;
    }
`;


export default Wraper;