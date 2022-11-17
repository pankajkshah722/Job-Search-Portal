import axios from 'axios';

export const getAllJogs=()=>async dispatch=>{

    dispatch({type:'LOADING', payload:true})
    try {
        const response = await axios.get('/api/jobs/getalljobs')
        dispatch({type: "GET_ALL_JOBS", payload : response.data} )
        dispatch({type:'LOADING', payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING', payload:false})
    }
}