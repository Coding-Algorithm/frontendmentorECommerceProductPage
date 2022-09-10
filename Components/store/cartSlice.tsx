import { createSlice } from "@reduxjs/toolkit";

type itemProps = {
    id: string,
    price: number,
    quantity: number,
    totalPrice: number,
    name: string
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload

            const existingItem = state.itemsList.find((item: itemProps): boolean => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++
                existingItem.price += newItem.price
                
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price
                })
            }


        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice

