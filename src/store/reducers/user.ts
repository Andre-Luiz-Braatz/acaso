import { createSlice, PayloadAction, ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface UserProps {
    id: number,
    name: string,
    email: string,
    updatedAt: string,
    createdAt: string
}

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserProps,
    reducers: {
        setUser: (state: UserProps, action: PayloadAction<UserProps>) : void => {
            Object.assign(state, action.payload);
        },
    }
})

export const { setUser } = userSlice.actions as {
    setUser: ActionCreatorWithPayload<UserProps>
};
export default userSlice.reducer;