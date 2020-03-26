import { GET_SERVICES, GET_SERVICES_ERROR, GET_SERVICES_PENDING } from '../actions/types/service.types';

const initialState = {
    list: [],
    error: null,
    loading: false,
  };

  export default (state = initialState, { type, payload }) => {
      switch (type) {
          case GET_SERVICES_PENDING:
              return {
                  ...state,
                  ...payload,
                  loading: true
                };
            case GET_SERVICES:
                return {
                    ...state,
                    list: payload,
                    loading: false
                }
            case GET_SERVICES_ERROR:
                return {
                    ...state,
                    error: payload
                }
                
        default:
            return state;
      }
  }