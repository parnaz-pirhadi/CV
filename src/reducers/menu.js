import {
    MENU
} from '../constants/actionTypes';
 export default ( state = {},action) =>{
     switch (action.type){
        case MENU:
            return {
                ...state,
                menuData:action.payload,
                menuLoad: true
            };
        default:
            return state;
        
     }
     return state;

 };