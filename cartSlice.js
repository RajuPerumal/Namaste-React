import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:["A","B"],
    },
    reducers:{//it is reducers which have more than one reducers on it
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },

        clearCart: () =>{
            State.items = []
        },

        // removeItems:(State,action)=>{
        //     State.items.pop()
        // },
    },
})

export const {addItem,clearCart,removeItems} = cartSlice.actions;

export default cartSlice.reducer//it combine all reducers and gives one reducer