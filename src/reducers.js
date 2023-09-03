
const initialState = {
    history: [],
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
            return { ...state, history: [...state.history, action.payload] };
        default:
            return state;
    }
};

export default historyReducer;
