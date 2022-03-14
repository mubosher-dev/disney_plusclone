import styled from "styled-components";
import Wraper from "../Wrap/Wraper";

const NewDisney = () => {
    const data = [
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",
            subTitle: "2006 • 1h 19m • Family, Comedy, Kids",
            title: "A tail of two kitties",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",
            type: "new"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
            subTitle: "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
            title: "Raya",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",
            type: "new"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            description: "Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.",
            subTitle: "2021 • 1 Season • Science Fiction, Action-Adventure, Buddy",
            title: "The falcon and the winter soldier",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78",
            type: "new"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "J-Pop band Perfume is featured in this original music and documentary series 'Disney’s My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",
            subTitle: "2019 • 53m • Documentary, Biographical, Music",
            title: "My music story",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",
            type: "new"
        }
    ]

    return (
        <Container>
            <h2>New Disney+</h2>
            <Content>
                {data.map((data, index) => {
                    return (
                        <Wraper key={index} url={data} />
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
export default NewDisney;