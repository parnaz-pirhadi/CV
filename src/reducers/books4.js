import {
    BOOK
} from '../constants/actionTypes';
 export default ( state = {},action) =>{
     switch (action.type){
        case BOOK:
            return {
                ...state,
                booksData:action.payload,
                booksLoad: true
            };
        default:
            return state;
        
     }
     return state;

 };