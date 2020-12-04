import{SAVE_PAGES,SAVE_PAGES_SEO} from '../Actions/Types';

const initialState = {
    savePages: [{}]
    
  
    };

    export default function (state = initialState, action) { 
        switch (action.type) {
          case SAVE_PAGES:
            return {
              ...state,
              savePages: action.payload
            };
            case SAVE_PAGES_SEO:
                return {
                  ...state,
                  savePagesSEO: action.payload
                };            
          default:
            return state;
        }
      }