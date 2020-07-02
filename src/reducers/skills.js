import {
    SKILLS
} from '../constants/actionTypes';
 export default ( state = {},action) =>{
     switch (action.type){
        case SKILLS:
            return {
                ...state,
                skillsData:action.payload,
                skillsLoad: true
            };
        default:
            return state;
        
     }
     return state;

 };