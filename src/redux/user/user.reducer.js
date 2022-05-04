import
UserActionTypes
from "./user.types";

const INITIAL_STATE = {
    currentUser: {
        station_code: 0,
        name: 'Test User',
        url: "https://picsum.photos/200"
    },
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            return state;
    }
}

export default userReducer;