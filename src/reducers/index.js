const initState = {
    name: "",
    isLoading: false
};

export const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, isLoading: true };
        case 'LOADED':
            return { ...state, isLoading: false };
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    };
};