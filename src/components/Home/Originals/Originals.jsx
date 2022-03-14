import styled from "styled-components";
import Wraper from "../Wrap/Wraper";

const Originals = () => {

    const data = [
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            description: "Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.",
            subTitle: "2020 • 1h 49m • Family, Comedy, Fantasy, Animation, Music",
            title: "Soul",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E837DDE901CD036DD87A00F2D63E2F2458FAA798E62BE91F973AECCEA313A67E/scale?width=1440&aspectRatio=1.78",
            type: "original"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            description: "ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios’ thrilling new shows and theatrical releases.",
            subTitle: "2021 • 1 Season • Docuseries, Anthology",
            title: "Assembled",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37D80C5D1AB0BA65C63588311EC60A07342F60F91D402C28B8E1137AF6A30549/scale?width=1440&aspectRatio=1.78",
            type: "original"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            description: "A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",
            subTitle: "2020 • 6m • Family, Animation",
            title: "Burrow",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78",
            type: "original"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            description: "Marvel Studios LEGENDS traces Wanda Maximoffs evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways…",
            subTitle: "2021 • 1 Season • Science Fiction, Fantasy, Action-Adventure",
            title: "Legends",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78",
            type: "original"
        },
    ]

    return (
        <Container>
            <h2>Originals</h2>
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

export default Originals;