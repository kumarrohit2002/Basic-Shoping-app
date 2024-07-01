import { createSlice } from "@reduxjs/toolkit"

const initialState={
    carts:[]
}

export const CartSlice=createSlice({
    name: 'CartSlice',
    initialState,
    reducers:{
        add:(state,action) =>{
            // alert("Hello");
            state.carts.push(action.payload);
        },
        remove:(state,action) =>{
            state.carts=state.carts.filter((item) => item.id !== action.payload);
        },
    },

})

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;