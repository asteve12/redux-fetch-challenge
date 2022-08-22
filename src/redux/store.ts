import { configureStore } from "@reduxjs/toolkit";
import coroReducer from "./slice"


const store = configureStore({
    reducer: {
        coroReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch