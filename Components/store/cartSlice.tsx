import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action){
            const newsItem = action.payload



        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice

