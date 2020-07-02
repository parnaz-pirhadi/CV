import {
    SCIENTIFIC
} from '../constants/actionTypes';
 export default ( state = {},action) =>{
     switch (action.type){
        case SCIENTIFIC:
            return {
                ...state,
                scientificData:action.payload,
                scientificLoad: true
            };
        default:
            return state;
        
     }
     return state;

 };