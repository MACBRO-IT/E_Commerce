import{SAVE_PRODUCT_CATAGORIES_GENERAL} from '../../Actions/Types';

const initialState = {
    saveProductCatagoriesGeneral: [{}]
    
  
    };

    export default function (state = initialState, action) { 
        switch (action.type) {
          case SAVE_PRODUCT_CATAGORIES_GENERAL:
            return {
              ...state,
              saveProductCatagoriesGeneral: action.payload
            };
            
          default:
            return state;
        }
      }