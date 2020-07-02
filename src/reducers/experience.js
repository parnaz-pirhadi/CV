import {
    EXPERIENCE
} from '../constants/actionTypes';
 export default ( state = {},action) =>{
     switch (action.type){
        case EXPERIENCE:
            return {
                ...state,
                experienceData:action.payload,
                experienceLoad: true
            };
        default:
            return state;
        
     }
     return state;

 };