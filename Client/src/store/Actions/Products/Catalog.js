import axios from "axios";
import {SAVE_PRODUCT_GENERAL, GET_LAST_PRODUCT_ID,SAVE_PRODUCT_PRICE,SAVE_PRODUCT_INVENTORY,SAVE_PRODUCT_SEO,
  SAVE_PRODUCT_ATTRIBUTE,SAVE_PRODUCT_OPTIONS,SAVE_PRODUCT_ADDITIONAL}   from "../Types";

// Product General 
 
export const saveProductGeneral = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Product/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_GENERAL,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_GENERAL,
        payload: {}
      })
    );
};  

export const getLastRecode = () => dispatch => { 
  var URL = "http://localhost:4000/" 
  axios
    .get(URL+"Product/lastRecode")
    .then(res =>
      dispatch({
        type: GET_LAST_PRODUCT_ID,
        payload: res.data  
      }), 
    ) 
    .catch(err =>
      dispatch({
        type: GET_LAST_PRODUCT_ID, 
        payload: {}
      })
    );
};
//Price

export const saveProductPrice = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Product/PriceUpdate", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_PRICE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_PRICE,
        payload: {}
      })
    );
};  

//Inventory

export const saveProductInventory = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Product/InventoryUpdate", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_INVENTORY,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_INVENTORY,
        payload: {}
      })
    );
};
 

//SEO

export const SaveProductSEO = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Product/SEOUpdate", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_SEO,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_SEO,
        payload: {}
      })
    );
};   

//Attribute

export const SaveProductAttribute = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductAttributes", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_ATTRIBUTE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_ATTRIBUTE,
        payload: {}
      })
    );
};


//Options

export const SaveProductOptions = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductOptions", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_OPTIONS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_OPTIONS,
        payload: {}
      })
    );
};  

//Additional

export const SaveProductAdditional = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"ProductAdditional", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PRODUCT_ADDITIONAL,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PRODUCT_ADDITIONAL,
        payload: {}
      })
    );
};  