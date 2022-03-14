import styled from "styled-components";
import { Link } from 'react-router-dom'
import Wraper from "../Wrap/Wraper";

const Recomends = () => {

    const data = [
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
            subTitle: "2015 • 1h 35m • Coming of Age, Family, Animation",
            title: "Inside Out",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",
            type: "recommend"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
            subTitle: "2018 • 7m • Family, Fantasy, Kids, Animation",
            title: "Bao",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",
            type: "recommend"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.",
            subTitle: "2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure",
            title: "Incredibles 2",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",
            type: "recommend"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jack’s seemingly limitless powers.",
            subTitle: "2018 • 7m • Family, Comedy, Animation",
            title: "Auntie EDNA",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A31BE6502DC7A3A01DAF58DF7E91AB6FF598A078C8FA88A1DB2D7B7E25439464/scale?width=1440&aspectRatio=1.78",
            type: "recommend"
        },
    ]

    return (
        <Container>
            <h2>Recomended For You </h2>
            <Content> 
                {data.map((data,index) => {
                    return(
                        <Wraper key={index} url={data}/>
                    )
                })}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding:0 0 16px;
`;

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,1fr);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`;



export default Recomends;