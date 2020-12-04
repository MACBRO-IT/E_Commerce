import{SAVE_USER_ACCOUNT,SAVE_USER_ROLE} from '../Actions/Types';
  
  const initialState = {
      saveUserAccount: [{}],
      saveUserRole : [{}],
       
      
      };
  
      export default function (state = initialState, action) { 
          switch (action.type) {
            case SAVE_USER_ACCOUNT:
              return {
                ...state,
                saveUserAccount: action.payload
              };
              case SAVE_USER_ROLE:
              return {
                ...state,
                saveUserRole: action.payload
              };
              
            default:
              return state;
          }
        }
  
  
  