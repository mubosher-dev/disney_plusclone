export const initialState = {
    user:"",
    email:"",
    photo:"",
    data: {
        backgroundImg:null,
        cardImg:null,
        description:null,
        subTitle:null,
        title:null,
        titleImg: null,
        type:null,
    },
}

export const actionTypes = {
    SET_LOGIN_USER: "SET_USER",
    SIGN_OUT:"SET_LOG_OUT",
    SELECTED:"SELECTED",
}

export let dataLayer = [];

const reducer = (state,action) => {
    console.log("actiom>>>>>>",action);

    dataLayer = action;

    switch(action.type1){
        case actionTypes.SET_LOGIN_USER:
            return{
                ...state,
                user:action.user,
                email:action.email,
                photo:action.photo,
                data: {
                    backgroundImg: null,
                    cardImg: null,
                    description: null,
                    subTitle: null,
                    title: null,
                    titleImg: null,
                    type: null,
                },
            };
        case actionTypes.SIGN_OUT:
            return{
                ...state,
                user:null,
                email:null,
                photo:null,
                data: {
                    backgroundImg: null,
                    cardImg: null,
                    description: null,
                    subTitle: null,
                    title: null,
                    titleImg: null,
                    type: null,
                },
            };
        
        case actionTypes.SELECTED:
            return{
                ...state,
            }

        default:
            return state;
    }
}


export default reducer
// export const initialState = {
//     user: null,
// };

// export const actionTypes = {
//     SET_USER: "SET_USER",
// };

// const reducer = (state, action) => {
//     console.log(action);

//     switch (action.type) {
//         case actionTypes.SET_USER:
//             return {
//                 ...state,
//                 user: action.user,
//             };
//         default:
//             return state;
//     }
// };

// export default reducer;