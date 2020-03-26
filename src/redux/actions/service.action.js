import axios from 'axios';
import { GET_SERVICES, GET_SERVICES_ERROR, GET_SERVICES_PENDING } from './types/service.types';
import { BASE_URL } from '../../utils/constant';

export const getServicePending = () => ({
    type: GET_SERVICES_PENDING,
    payload: true,
});
export const getAllServices = () => async (dispatch) => {
    dispatch(getServicePending());
    try {
        const res = await axios.get(`${BASE_URL}/api/service`);
        dispatch({
            type: GET_SERVICES,
            payload: res.data.services
        })
        console.log(res.data.services);
    
    } catch(error) {
        dispatch({
            type: GET_SERVICES_ERROR,
            payload: error.response
        })
        console.log('ERROR', error)
    }
}