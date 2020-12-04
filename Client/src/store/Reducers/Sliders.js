import{SAVE_STORE_FRONT_GENERAL,SAVE_STORE_FRONT_MENU,SAVE_STORE_FRONT_FEATURES,
  SAVE_STORE_FRONT_SOCIAL_LINKS,SAVE_STORE_FRONT_FEATURE_CATEGORIES,SAVE_STORE_FRONT_PRODUCT_TAB_ONE,
  SAVE_STORE_FRONT_TOP_BRANDS,SAVE_FLASH_SALE_VERTICAL_PRODUCTS,SAVE_PRODUCT_GRID,SAVE_PRODUCT_TAB_TWO} from '../Actions/Types';
  
  const initialState = {
    saveStorefront: [{}],
    saveStorefrontmenu : [{}],
    saveStorefrontfeatures : [{}],    
    saveStorefrontfeaturecategories : [{}],
    saveStorefrontproducttabone : [{}],
    saveStorefronttopbrands : [{}],
    saveFlashsale_verticalproducts : [{}],
    saveProductgrid : [{}],
    saveProducttabtwo : [{}],
      
      };
  
      export default function (state = initialState, action) { 
          switch (action.type) {
            case SAVE_STORE_FRONT_GENERAL:
              return {
                ...state,
                saveStorefront: action.payload
              };
              case SAVE_STORE_FRONT_MENU:
                  return {
                    ...state,
                    saveStorefrontmenu: action.payload
                  };
                  case SAVE_STORE_FRONT_FEATURES:
                  return {
                    ...state,
                    saveStorefrontfeatures: action.payload
                  };
                  case SAVE_STORE_FRONT_SOCIAL_LINKS:
                  return {
                    ...state,
                    saveStorefrontsociallinks: action.payload
                  };
                  case SAVE_STORE_FRONT_FEATURE_CATEGORIES:
                  return {
                    ...state,
                    saveStorefrontfeaturecategories: action.payload
                  };
                  case SAVE_STORE_FRONT_PRODUCT_TAB_ONE:
                  return {
                    ...state,
                    saveStorefrontproducttabone: action.payload
                  };
                  case SAVE_STORE_FRONT_TOP_BRANDS:
                  return {
                    ...state,
                    saveStorefronttopbrands: action.payload
                  };
                  case SAVE_FLASH_SALE_VERTICAL_PRODUCTS:
                  return {
                    ...state,
                    saveFlashsale_verticalproducts: action.payload
                  };
                  case SAVE_PRODUCT_GRID:
                  return {
                    ...state,
                    saveProductgrid: action.payload
                  };
                  case SAVE_PRODUCT_TAB_TWO:
                  return {
                    ...state,
                    saveProducttabtwo: action.payload
                  };
            default:
              return state;
          }
        }
  
  
  