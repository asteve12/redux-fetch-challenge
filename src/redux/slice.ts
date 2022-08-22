import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface Istate{
    state: string,
    _id: string,
    confirmedCases: string,
    casesOnAdmission: string,
    discharged: string,
    death:string
}


interface icoroData{
    totalSamplesTested: string,
    totalConfirmedCases: string,
    totalActiveCases: string,
    discharged: string,
    death: string,
    states: Istate []
} 

interface initialState{
    loading: boolean,
    error: string | undefined,
    coroData:icoroData
}

const initialState: initialState = {
    loading: true,
    error: "",
    coroData: {
        totalSamplesTested: "",
        totalConfirmedCases: "",
        totalActiveCases: "",
        discharged: "",
        death:"",
        states:[]
        
    }
    
}

//fetch virus data
const fetchCoroData = createAsyncThunk("test/fectCoroData", async (_, { rejectWithValue }) => {
    
    try {
       const res = await axios.get("https://covidnigeria.herokuapp.com/api")
        return res.data.data
    }
    catch (err) {
       return rejectWithValue(err)
    }
   

    
})




let coroDataSlice = createSlice({
    name: "coro",
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchCoroData.pending, (state, action) => {
            state.loading = true;
        })
        builders.addCase(fetchCoroData.fulfilled, (state, action) => {
            state.coroData = action.payload
            state.loading = false
        })
        builders.addCase(fetchCoroData.rejected, (state, {error}) => {
            state.loading = false;
            state.error = error.message
        })
        
    }
})



export default coroDataSlice.reducer

export {fetchCoroData}





