import { SAVE_PRODUCT_GENERAL,GET_LAST_PRODUCT_ID,SAVE_PRODUCT_PRICE,SAVE_PRODUCT_INVENTORY,SAVE_PRODUCT_SEO,
  SAVE_PRODUCT_ATTRIBUTE,SAVE_PRODUCT_OPTIONS,SAVE_PRODUCT_ADDITIONAL } from '../../Actions/Types';

const initialState = {
  SaveProductGenerals: [{}], 
  getLastProductId: {},
  SaveProductPrice: [{}],
  SaveProductInventories: [{}],
  SaveProductSEO :[{}],

  SaveProductAttribute : [{}],
  SaveProductOptions : [{}],
  SaveProductAdditional : [{}]

  };

export default function (state = initialState, action) { 
  switch (action.type) {
    case SAVE_PRODUCT_GENERAL:
      return {
        ...state,
        SaveProductGenerals: action.payload
      };
      case GET_LAST_PRODUCT_ID:
      return {
        ...state,
        getLastProductId: action.payload
      };
      case SAVE_PRODUCT_PRICE:
      return {
        ...state,
        SaveProductPrice: action.payload
      };
      case SAVE_PRODUCT_INVENTORY:
        return {
          ...state,
          SaveProductInventories: action.payload
        };
        case SAVE_PRODUCT_SEO:
          return {
            ...state,
            SaveProductSEO: action.payload
          };
          case SAVE_PRODUCT_ATTRIBUTE:
            return {
              ...state,
              SaveProductAttribute: action.payload
            };
            case SAVE_PRODUCT_ADDITIONAL:
            return {
              ...state,
              SaveProductAdditional: action.payload
            };
            case SAVE_PRODUCT_OPTIONS:
            return {
              ...state,
              SaveProductOptions: action.payload
            };
    default:
      return state;
  }
}