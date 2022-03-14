var S=Object.defineProperty,j=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var F=(i,t,a)=>t in i?S(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,g=(i,t)=>{for(var a in t||(t={}))_.call(t,a)&&F(i,a,t[a]);if(b)for(var a of b(t))N.call(t,a)&&F(i,a,t[a]);return i},y=(i,t)=>j(i,L(t));import{s as n,j as e,a as r,f as E,r as c,u as x,L as M,d as P,b as z,c as w,e as $,g as O,h as W,F as G,S as U,i as D,k as J,B as H,R as K,l as f,m as V,n as X}from"./vendor.9be1e9b8.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};q();function Y(){return e(Z,{children:r(Q,{children:[r(te,{children:[e(ie,{src:"https://disney-clone-d1e27.web.app/images/cta-logo-one.svg"}),e(ne,{children:" Get All Free "}),e(ae,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),e(re,{src:"https://disney-clone-d1e27.web.app/images/cta-logo-two.png"})]}),e(ee,{})]})})}const Z=n.section`
    display:flex;
    overflow:hidden;
    flex-direction:column;
    text-align:center;
    height:100vh;
`,Q=n.div`
    margin-bottom:10vh;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    height:100vh;
    padding:20px 40px;
`,ee=n.div`
    right:0;
    left:0;
    height:100vh;
    top:0;
    z-index:-99899990;
    backgroun-position:center;
    position:absolute;
    background-size:cover;
    background-image:url("https://disney-clone-d1e27.web.app/images/login-background.jpg");
`,te=n.div`
    position:relative;
    z-index:100000;
    width:600px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media screen and (max-width:500px){
        width:90%!important;
    }
`,ie=n.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    width:100%;

    @media screen and (max-width:768px){
        width:400px;
    }
    @media screen and (max-width:450px){
        width:300px;
    }
`,ne=n.a`
    font-seight:bold;
    display:block;
    width:100%;
    color:#f9f9f9;
    background-color:#0063e5;
    letter-spacong:1.5px;
    margin-bottom:12px;
    font-size:18px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;

    &:hover{
        background-color:#0483ee;
    }
`,ae=n.p`
    font-size:14px;
    color:lightgray;
`,re=n.img`
    max-width:600px;
    object-fit:contain;
    // width:300px;

    @media screen and (max-width:768px){
        width:450px;
        object-fit:cover;
    }

    @media screen and (max-width:450px){
        width:300px;
    }
`;function p({Icon:i,NavTitle:t}){return r(se,{children:[i,e("h4",{children:t})]})}const se=n.div`
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
`,oe={apiKey:"AIzaSyB1zDh8BjzlN0D1nlfXAPyhFBEaHh8fudM",authDomain:"disney-plusclone-6f1c5.firebaseapp.com",projectId:"disney-plusclone-6f1c5",storageBucket:"disney-plusclone-6f1c5.appspot.com",messagingSenderId:"66498791268",appId:"1:66498791268:web:df1cb2484a6d95d8175c71",measurementId:"G-863G2KZ7ZY"},de=E.initializeApp(oe);de.firestore();const le=E.auth(),pe=new E.auth.GoogleAuthProvider,ce={user:"",email:"",photo:"",data:{backgroundImg:null,cardImg:null,description:null,subTitle:null,title:null,titleImg:null,type:null}},u={SET_LOGIN_USER:"SET_USER",SIGN_OUT:"SET_LOG_OUT",SELECTED:"SELECTED"};let k=[];const ue=(i,t)=>{switch(console.log("actiom>>>>>>",t),k=t,t.type1){case u.SET_LOGIN_USER:return y(g({},i),{user:t.user,email:t.email,photo:t.photo,data:{backgroundImg:null,cardImg:null,description:null,subTitle:null,title:null,titleImg:null,type:null}});case u.SIGN_OUT:return y(g({},i),{user:null,email:null,photo:null,data:{backgroundImg:null,cardImg:null,description:null,subTitle:null,title:null,titleImg:null,type:null}});case u.SELECTED:return g({},i);default:return i}},I=c.exports.createContext(),he=({reducer:i,initialState:t,children:a})=>e(I.Provider,{value:c.exports.useReducer(i,t),children:a}),R=()=>c.exports.useContext(I);function ge(){const[i,t]=c.exports.useState(""),a=x(),[l,s]=R();c.exports.useState(!1);const o=()=>{le.signInWithPopup(pe).then(d=>{console.log("auth result>>>",d),h(d.user),a("/home")}).catch(d=>{console.log("auth err>>>",d)})};console.log("homestate>>",l);const h=d=>{console.log("setLoginUser>>>>>>",d),s({type:u.SET_LOGIN_USER,user:d.displayName,email:d.email,photo:d.photoURL}),t(d)},T=()=>{a("/"),s({type:u.SIGN_OUT,user:null,email:null,photo:null}),t(null),a("/")};return c.exports.useEffect(()=>{i||a("/")},[]),r(me,{children:[e(M,{to:"/home",children:e(ye,{src:"https://disney-clone-d1e27.web.app/images/logo.svg"})}),i&&r(Ae,{children:[e(p,{Icon:e(P,{}),NavTitle:"Home"}),e(p,{Icon:e(z,{}),NavTitle:"Search"}),e(p,{Icon:e(w,{}),NavTitle:"WatchList"}),e(p,{Icon:e($,{}),NavTitle:"Originals"}),e(p,{Icon:e(O,{}),NavTitle:"Movies"}),e(p,{Icon:e(W,{}),NavTitle:"Series"})]}),i?r(Ee,{children:[e(fe,{src:i.photoURL}),e(be,{onClick:T,children:" Sign Out "})]}):e(G,{children:e(ve,{onClick:o,children:"Login"})})]})}const me=n.header`
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
`,ye=n.img`
  width:90px ;
  object-fit:contain;
`,ve=n.a`
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
`,Ae=n.div`
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
`,fe=n.img`
  width:50px;
  border-radius:100%;
  cursor:pointer;
`,Ee=n.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  width:150px;

  &:hover button{
    display:block;
  }
`,be=n.button`
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
`;const Fe=i=>r(De,y(g({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{children:[e(v,{children:e("a",{children:e("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg",alt:""})})}),e(v,{children:e("a",{children:e("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68CA3C99BB5EF67A9BBBBA9580A0F03811BA82BF9C5689FE8CE544C1F67B2F04/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391",alt:""})})}),e(v,{children:e("a",{children:e("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46B428B48739ED520A3ED05C60E048ADA6FC0BCC2DB2B2F897092C466BF6F5FA/scale?width=1440&aspectRatio=3.91&format=jpeg",alt:""})})}),e(v,{children:e("a",{children:e("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE1A5A21FD503240A3D781CB05A17B528318E8429D879BCC42BFEBD644EF9C54/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391",alt:""})})})]})),De=n(U)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`,v=n.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`,Be=()=>r(Ce,{children:[r(m,{children:[e("img",{src:"https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-disney.png?raw=true",alt:"viewers__png"}),e("video",{src:"./videos/disney.mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0})]}),r(m,{children:[e("img",{src:"https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-marvel.png?raw=true",alt:"viewers__png"}),e("video",{src:"./videos/marvel.mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0})]}),r(m,{children:[e("img",{src:"https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-national.png?raw=true",alt:"viewers__png"}),e("video",{src:"./videos/geopragic.mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0})]}),r(m,{children:[e("img",{src:"https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-pixar.png?raw=true",alt:"viewers__png"}),e("video",{src:"./videos/pixar.mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0})]}),r(m,{children:[e("img",{src:"https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-starwars.png?raw=true",alt:"viewers__png"}),e("video",{src:"./videos/star.mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0})]})]}),Ce=n.div`
    margin-top:30px;
    padding:30px 0px 30px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));


    @media screen and (max-width:768px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`,m=n.div`
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
`,A=({url:i})=>{const[t,a]=R(),l=x();return e(xe,{onClick:()=>{l("/cartoon"),a({type:u.SELECTED,data:{backgroundImg:i.backgroundImg,cardImg:i.cardImg,description:i.description,subTitle:i.subTitle,title:i.title,titleImg:i.titleImg,type:i.type}})},children:e("img",{src:i.cardImg,alt:"view__img"})})},xe=n.div`
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
`,we=()=>r(ke,{children:[e("h2",{children:"Recomended For You "}),e(Ie,{children:[{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",subTitle:"2015 \u2022 1h 35m \u2022 Coming of Age, Family, Animation",title:"Inside Out",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",description:"A Chinese mom who\u2019s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",subTitle:"2018 \u2022 7m \u2022 Family, Fantasy, Kids, Animation",title:"Bao",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg",description:"While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of \u201Cnormal\u201D life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.",subTitle:"2018 \u2022 1h 58m \u2022 Science Fiction, Family, Animation, Action-Adventure",title:"Incredibles 2",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jack\u2019s seemingly limitless powers.",subTitle:"2018 \u2022 7m \u2022 Family, Comedy, Animation",title:"Auntie EDNA",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A31BE6502DC7A3A01DAF58DF7E91AB6FF598A078C8FA88A1DB2D7B7E25439464/scale?width=1440&aspectRatio=1.78",type:"recommend"}].map((t,a)=>e(A,{url:t},a))})]}),ke=n.div`
    padding:0 0 16px;
`,Ie=n.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,1fr);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`,Re=()=>r(Te,{children:[e("h2",{children:"Originals"}),e(Se,{children:[{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar\u2019s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life\u2019s biggest questions.",subTitle:"2020 \u2022 1h 49m \u2022 Family, Comedy, Fantasy, Animation, Music",title:"Soul",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E837DDE901CD036DD87A00F2D63E2F2458FAA798E62BE91F973AECCEA313A67E/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios\u2019 thrilling new shows and theatrical releases.",subTitle:"2021 \u2022 1 Season \u2022 Docuseries, Anthology",title:"Assembled",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37D80C5D1AB0BA65C63588311EC60A07342F60F91D402C28B8E1137AF6A30549/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she\u2019s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",subTitle:"2020 \u2022 6m \u2022 Family, Animation",title:"Burrow",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Marvel Studios LEGENDS traces Wanda Maximoffs evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways\u2026",subTitle:"2021 \u2022 1 Season \u2022 Science Fiction, Fantasy, Action-Adventure",title:"Legends",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78",type:"original"}].map((t,a)=>e(A,{url:t},a))})]}),Te=n.div`
    padding:0 0 16px;
`,Se=n.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,1fr);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`,je=()=>r(Le,{children:[e("h2",{children:"New Disney+"}),e(_e,{children:[{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",subTitle:"2006 \u2022 1h 19m \u2022 Family, Comedy, Kids",title:"A tail of two kitties",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",subTitle:"2021 \u2022 1h 52m \u2022 Family, Fantasy, Animation, Action-Adventure",title:"Raya",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Marvel Studios\u2019 \u201CThe Falcon and The Winter Soldier\u201D stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of \u201CAvengers: Endgame,\u201D team up on a global adventure that tests their abilities\u2014and their patience.",subTitle:"2021 \u2022 1 Season \u2022 Science Fiction, Action-Adventure, Buddy",title:"The falcon and the winter soldier",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",description:"J-Pop band Perfume is featured in this original music and documentary series 'Disney\u2019s My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",subTitle:"2019 \u2022 53m \u2022 Documentary, Biographical, Music",title:"My music story",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",type:"new"}].map((t,a)=>e(A,{url:t},a))})]}),Le=n.div`
    padding:0 0 16px;
`,_e=n.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,1fr);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`,Ne=()=>r(Me,{children:[e("h2",{children:"Tranding"}),e(Pe,{children:[{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When the kingdom's most wanted bandit is taken hostage by Rapunzel \u2014 a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years \u2014 the unlikely duo sets off on a hair-raising escapade.",subTitle:"2010 \u2022 1h 40m \u2022 Family, Fantasy, Animation, Action-Adventure, Musical",title:"Tangled",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui\u2013together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",subTitle:"2016 \u2022 1h 47m \u2022 Family, Fantasy, Animation, Action-Adventure, Musical",title:"Moana",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg",description:"This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",subTitle:"1989 - 2019 \u2022 31 Seasons \u2022 Comedy, Animation",title:"The Simpsons",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",subTitle:"2006 - 2013 \u2022 5 Seasons \u2022 Kids, Animation",title:"Mickey mouse",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FF3FCD567F0263430DFC33B9489CE2799AE33B50AD553DE65F03B3EA2E19828/scale?width=1440&aspectRatio=1.78",type:"trending"}].map((t,a)=>e(A,{url:t},a))})]}),Me=n.div`
    padding:0 0 16px;
`,Pe=n.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,1fr);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`;function ze(){return r($e,{children:[e(Fe,{}),e(Be,{}),e(we,{}),e(je,{}),e(Re,{}),e(Ne,{})]})}const $e=n.div`
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
`,Oe=i=>{const t=k.data;return r(We,{style:{background:`linear-gradient(0,rgba(0,0,0,0.3),rgba(0,0,0,0.8)),url(${t==null?void 0:t.backgroundImg})`},children:[e(Ue,{src:t==null?void 0:t.titleImg}),r(Ge,{children:[r(B,{className:"white",children:[" ",e(D,{}),"Play "]}),r(B,{children:[" ",e(D,{className:"black"}),"Trailer "]}),r(C,{children:[" ",e(w,{className:"add"})," "]}),r(C,{children:[" ",e(J,{className:"group"})," "]})]}),r("h4",{children:[" ",t==null?void 0:t.subTitle]}),e("h3",{children:t==null?void 0:t.description})]})},We=n.div`
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
`,Ge=n.div`
    display:flex;
    font-size:20px;
    align-items:center;


`,Ue=n.img`
    width:500px;
    object-fit:contain;

    @media screen and (max-width:768px){
        width:200px !important;
    }
`,B=n.div`
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
`,C=n.button`
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

`;function Je(){return e("div",{className:"App",children:r(H,{children:[e(ge,{}),r(K,{children:[e(f,{path:"/",element:e(Y,{})}),e(f,{path:"/home",element:e(ze,{})}),e(f,{path:"/cartoon",element:e(Oe,{})})]})]})})}V.render(e(X.StrictMode,{children:e(he,{initialState:ce,reducer:ue,children:e(Je,{})})}),document.getElementById("root"));
