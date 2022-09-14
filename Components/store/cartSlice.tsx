import { createSlice } from "@reduxjs/toolkit";

type itemProps = {
    id: string,
    price: number,
    quantity: number,
    totalPrice: number,
    name: string
}


type stateProps = {
    itemsList: itemProps[],
    totalQuantity: number,
    showCart: boolean
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state: stateProps, action) {
            const newItem = action.payload


            const existingItem = state.itemsList.find((item: itemProps) => { if (item.id === newItem.id) { return item } })
            if (existingItem) {
                existingItem.quantity++
                existingItem.price += newItem.price
                state.totalQuantity++
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++
            }
        },
        removeCart(state: stateProps, action) {
            const itemToRemove = action.payload

            // console.log({...state.itemsList})

            console.log(itemToRemove)

            state.itemsList = state.itemsList.filter((item: itemProps) => { item.id === itemToRemove })

            state.totalQuantity = 0
            state.itemsList.forEach(item => state.totalQuantity = state.totalQuantity + item.quantity)

        },
        decreaseCart(state: stateProps, action) {
            const decreasingItem = action.payload

            state.totalQuantity = 0;
            const existingItem = state.itemsList.map((item: itemProps) => {
                if (item.id === decreasingItem) {
                    if (item.quantity > 1) {
                        state.totalQuantity = state.totalQuantity--;
                        item.quantity--
                    } else {
                        this.removeCart(state, { payload: item.id, type: 'string' })
                    }

                    return
                }
            })
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice

