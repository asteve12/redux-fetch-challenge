
import { useSelector, useDispatch } from "react-redux"
import { fetchCoroData } from "../redux/slice"
//types
import { RootState, AppDispatch } from "../redux/store"

//handle form logic 
const useForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {loading,coroData, error} = useSelector((state:RootState)=> state.coroReducer)
   return {
        coroData,
        loading,
        error,
        fetchCoroData,
        dispatch
    }

    
    
}

export default useForm