import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
};

const userProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setGetProfile: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.userName = action.payload.body.userName;
        },
        setEditProfile: (state, action) => {
            state.userName = action.payload
        },
        resetProfile: () => {
            return initialState; 
        },
    },
});

export const { setGetProfile, setEditProfile, resetProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;