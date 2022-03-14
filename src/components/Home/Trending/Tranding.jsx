import styled from "styled-components";
import Wraper from "../Wrap/Wraper";

const Tranding = () => {

    const data = [
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
            subTitle: "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
            title: "Tangled",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
            type: "trending"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui–together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",
            subTitle: "2016 • 1h 47m • Family, Fantasy, Animation, Action-Adventure, Musical",
            title: "Moana",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78",
            type: "trending"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
            subTitle: "1989 - 2019 • 31 Seasons • Comedy, Animation",
            title: "The Simpsons",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78",
            type: "trending"
        },
        {
            backgroundImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",
            cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg",
            description: "Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",
            subTitle: "2006 - 2013 • 5 Seasons • Kids, Animation",
            title: "Mickey mouse",
            titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FF3FCD567F0263430DFC33B9489CE2799AE33B50AD553DE65F03B3EA2E19828/scale?width=1440&aspectRatio=1.78",
            type: "trending"
        },
    ]

    return (
        <Container>
            <h2>Tranding</h2>
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


export default Tranding;