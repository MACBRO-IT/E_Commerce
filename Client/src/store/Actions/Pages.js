import axios from "axios";
import{SAVE_PAGES,SAVE_PAGES_SEO} from "../Actions/Types";



// Coupon General 
 
export const savePages = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"Pages/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_PAGES,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_PAGES,
          payload: {}
        })
      );
  };  
  
//  Pages_SEO

 export const savePagesSEO = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"PagesSEO/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PAGES_SEO,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PAGES_SEO,
        payload: {}
      })
    );
};  

 