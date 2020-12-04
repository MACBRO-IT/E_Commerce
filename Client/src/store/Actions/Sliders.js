import axios from "axios";
import{SAVE_STORE_FRONT_GENERAL,SAVE_STORE_FRONT_MENU,SAVE_STORE_FRONT_FEATURES,
  SAVE_STORE_FRONT_SOCIAL_LINKS,SAVE_STORE_FRONT_FEATURE_CATEGORIES,SAVE_STORE_FRONT_PRODUCT_TAB_ONE,
  SAVE_STORE_FRONT_TOP_BRANDS,SAVE_FLASH_SALE_VERTICAL_PRODUCTS,SAVE_PRODUCT_GRID,SAVE_PRODUCT_TAB_TWO} from "../Actions/Types";



// STOREFRONT_GENERAL
 
export const saveStorefront = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"StoreFront/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_STORE_FRONT_GENERAL,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_STORE_FRONT_GENERAL,
          payload: {}
        })
      );
  };  
//Storefront_Menu
export const saveStorefrontmenu = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"StoreFrontMenu/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_MENU,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_MENU,
        payload: {}
      })
    );
};  
//Storefront_features
export const saveStorefrontfeatures = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"StoreFrontFeatures/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_FEATURES,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_FEATURES,
        payload: {}
      })
    );
}; 
//Storefront_social_links
export const saveStorefrontsociallinks = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"StoreFrontSocialLinks/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_SOCIAL_LINKS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_SOCIAL_LINKS,
        payload: {}
      })
    );
}; 
//Storefront_Feature_Categories
export const saveStorefrontfeaturecategories = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"FeaturedCategories/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_FEATURE_CATEGORIES,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_FEATURE_CATEGORIES,
        payload: {}
      })
    );
}; 
//Storefront_Product_tab_one
export const saveStorefrontproducttabone = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductTabsOne/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_PRODUCT_TAB_ONE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_PRODUCT_TAB_ONE,
        payload: {}
      })
    );
};
//Top_brands
export const saveStorefronttopbrands = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"TopBrands/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE_FRONT_TOP_BRANDS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE_FRONT_TOP_BRANDS,
        payload: {}
      })
    );
};
//Flashsale_Verticalproducts
export const saveFlashsale_verticalproducts = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"FlashSaleVerticalProducts/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_FLASH_SALE_VERTICAL_PRODUCTS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_FLASH_SALE_VERTICAL_PRODUCTS,
        payload: {}
      })
    );
};
//Product_Grid
export const saveProductgrid = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductGrid/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_GRID,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_GRID,
        payload: {}
      })
    );
};
//Product_tab_one
export const saveProducttabtwo = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductTabsTwo/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_TAB_TWO,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_TAB_TWO,
        payload: {}
      })
    );
};