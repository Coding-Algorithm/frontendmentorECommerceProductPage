import {createStore} from 'redux'

const INITIAL_STATE = {
    cart: {
        cartItems: [],
        cartTotal: 0,
    }
}

const reducer = (state: Object, action: Function) => {

}


const store = createStore(reducer)
export default store;