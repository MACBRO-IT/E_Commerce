import axios from "axios";
import{SAVE_PRODUCT_CATAGORIES_GENERAL} from "../Types";



// Product General 
 
export const saveProductCatagoriesGeneral = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"Categories/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_PRODUCT_CATAGORIES_GENERAL,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_PRODUCT_CATAGORIES_GENERAL,
          payload: {}
        })
      );
  };  
  
 