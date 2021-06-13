import * as React from 'react'

const CartContext = React.createContext()

function cartReducer(state, action) {
    switch (action.type) {
      case 'add': {
        let index = state.cart.findIndex(product => product.id === action.item.id)
        if (index === -1){
            action.item.count = 1
            state.cart.push(action.item)
        } else {
            action.item.count = state.cart[index].count + 1
            state.cart[index] = action.item
        }
        return {cart: state.cart};
      }
      case 'remove': {
        let index = state.cart.findIndex(product => product.id === action.item.id)
        state.cart.splice(index,1)
        return {cart: state.cart}
      }
      case 'toggle':{
        return {cart: state.cart, visible: !state.visible}
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}

function CartProvider({children}) {
    const [state, dispatch] = React.useReducer(cartReducer, {cart: [], visible: "hide"})
    const value = {state, dispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export {CartProvider, useCart}